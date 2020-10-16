<template>
  <div :class="b()">
    <input
      v-model="hours"
      :class="b('input')"
      type="text"
      inputmode="numeric"
      pattern="^(([0-1]\d)|(2[0-3]))$"
      required
      size="2"
    >
    <i-colon :class="b('colon')" />
    <input
      v-model="minutes"
      :class="b('input')"
      type="text"
      inputmode="numeric"
      pattern="^(([0-5]\d))$"
      required
      size="2"
    >
  </div>
</template>

<script>
import IColon from '~/components/icons/IColon.vue';

export default {
  name: 'STimePicker',
  components: {
    IColon,
  },
  props: {
    value: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      hours: this.value.hours,
      minutes: this.value.minutes,
    };
  },
  // Why do we need data hours and minutes & value with hours and minutes:
  // [TODO]
  watch: {
    hours(newVal, oldVal) {
      // Masks input
      this.hours = (this.hoursValid(newVal)) ? newVal : oldVal;
      // Emits input event for sync via v-model
      this.$emit('input', {
        hours: this.hours,
        minutes: this.minutes,
        // Checks if current input contain properly formatted hours in range
        complete: this.minutesComplete(this.minutes) && this.hoursComplete(this.hours),
      });
    },
    minutes(newVal, oldVal) {
      this.minutes = (this.minutesValid(newVal)) ? newVal : oldVal;
      this.$emit('input', {
        hours: this.hours,
        minutes: this.minutes,
        complete: this.minutesComplete(this.minutes) && this.hoursComplete(this.hours),
      });
    },
  },
  methods: {
    hoursValid(value) {
      return /^(([0-2])|([0-1]\d)|(2[0-3]))?$/.test(value);
    },
    hoursComplete(value) {
      return /^([0-1]\d)|(2[0-3])$/.test(value);
    },
    minutesValid(value) {
      return /^([0-5]|([0-5]\d))?$/.test(value);
    },
    minutesComplete(value) {
      return /^([0-5]\d)$/.test(value);
    },
  },
};
</script>

<style>

/* Block */

.s-time-picker {
  display: flex;
  justify-items: center;
  align-items: center;
}

/* Element: input */

.s-time-picker__input {
  appearance: none;
  padding: .5rem .6rem;

  font-family: inherit;
  font-size: 1rem;

  border: 1px sold transparent;
  border-radius: .6rem;

  background: #F3F7F7;

  outline: none;
}

/* Element: colon */

.s-time-picker__colon {
  height: 1rem;
  width: 1rem;
}

/* Validation */

.s-time-picker__input:invalid {
  border: 1px solid #e63946;
}

.s-time-picker__input:valid {
  border: 1px solid #2a9d8f;
}
</style>
