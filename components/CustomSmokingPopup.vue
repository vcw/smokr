<template>
  <s-dialog v-model="dialog" :class="b()">
    <div :class="b('header')">
      <h2>Добавить курение</h2>
      <s-date-picker v-model="date" />
    </div>

    <div :class="b('main')">
      <s-time-picker v-model="time" />
    </div>

    <s-button
      :class="b('add-button')"
      color="ming"
      :disabled="!time.complete || loading"
      @click="addSmoking"
    >
      Добавить
    </s-button>
  </s-dialog>
</template>

<script>
import STimePicker from '~/components/ui/STimePicker.vue';
import SDatePicker from '~/components/ui/SDatePicker.vue';

export default {
  name: 'CustomSmokingPopup',
  components: {
    STimePicker,
    SDatePicker,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      time: {
        hours: '',
        minutes: '',
        complete: false,
      },
      date: new Date(),
      loading: false,
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  watch: {
    dialog(open) {
      if (open) {
        this.date = new Date();
        const timeString = this.date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        const timeArray = timeString.split(':');
        this.time = {
          hours: timeArray[0],
          minutes: timeArray[1],
          complete: true,
        };
      }
    },
  },
  methods: {
    async addSmoking() {
      this.date.setHours(Number(this.time.hours));
      this.date.setMinutes(Number(this.time.minutes));

      this.loading = true;
      const response = await this.$store.dispatch('userData/doSmokeV2', this.date);
      this.$vs.notification(response.notification);
      this.loading = false;
      this.dialog = false;
    },
  },
};
</script>

<style>
.custom-smoking-popup__header {
  text-align: center
}

.custom-smoking-popup__main {
  display: flex;
  justify-content: center;
  margin: 1.2rem 0;
}

.custom-smoking-popup__add-button {
  width: 100%;
}
</style>
