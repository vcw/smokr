<template>
  <vs-dialog v-model="dialog">
    <template #header>
      <div v-bem:header>
        <h2>Добавить курение</h2>
        <h3 v-bem:date>
          {{ date.toLocaleDateString('ru-RU') }}
        </h3>
      </div>
    </template>

    <div v-bem:main>
      <s-time-picker v-model="time" />
    </div>

    <template #footer>
      <s-button
        v-bem:add-button
        color="ming"
        :disabled="!time.complete || loading"
        @click="addSmoking"
      >
        Добавить
      </s-button>
    </template>
  </vs-dialog>
</template>

<script>
import STimePicker from '~/components/ui/STimePicker.vue';

export default {
  name: 'CustomSmokingPopup',
  components: {
    STimePicker,
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-smoking-popup__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-smoking-popup__input {
  margin-top: 1.5rem;
}

.custom-smoking-popup__date {
  margin: 0 auto;
}

.custom-smoking-popup__add-button {
  margin-top: 1.5rem;

  width: 100%;
}

</style>
