<template>
  <div :class="b()">
    <s-button
      v-if="!yesterday"
      :class="b('yesterday')"
      @click="yesterday = true"
    >
      <i-arrow />
    </s-button>

    <h3 :class="b('date')">
      {{ date.toLocaleDateString('ru-RU') }}
    </h3>

    <s-button
      v-if="yesterday"
      :class="b('today')"
      @click="yesterday = false"
    >
      <i-arrow direction="right" />
    </s-button>
  </div>
</template>

<script>
import IArrow from '~/components/icons/IArrow.vue';

export default {
  name: 'SDatePicker',
  components: {
    IArrow,
  },
  props: {
    value: {
      required: true,
      type: Date,
    },
  },
  data() {
    return {
      yesterday: false,
    };
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    yesterday(value) {
      const offset = (value) ? -1 : 1;
      this.date.setDate(this.date.getDate() + offset);
    },
  },
};
</script>

<style>
.s-date-picker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .6rem;

  margin-top: .6rem;
}

.s-date-picker__yesterday {
  grid-column: 1 / 2;
  justify-self: end;
}

.s-date-picker__date {
  grid-column: 2 / 3;
  align-self: center;
}

.s-date-picker__today {
  grid-column: 3 / 4;
  justify-self: start;
}
</style>
