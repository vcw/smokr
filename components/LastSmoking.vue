<template>
  <div v-if="lastSmoking" :class="b()">
    <h2 :class="b('heading')">
      Последнее курение
    </h2>
    <strong :class="b('time')">{{ time }}</strong>
    <span :class="b('date')">{{ date }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LastSmoking',
  computed: {
    ...mapState({
      lastSmoking: (state) => {
        const smokings = state.userData.smokesV2;
        return (smokings && smokings.length) ? smokings[0].data[0] : null;
      },
    }),
    time() {
      return (this.lastSmoking) ? this.lastSmoking.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      }) : null;
    },
    date() {
      return (this.lastSmoking) ? this.lastSmoking.toLocaleDateString('ru-RU') : null;
    },
  },
};
</script>

<style>
.last-smoking {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.last-smoking__heading {
  display: block;
  margin: 0;
  margin-bottom: .7rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #495867;
}

.last-smoking__time {
  display: block;
  margin: 0;
  margin-bottom: .25rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #495867;
}

.last-smoking__date {
  display: block;
  margin: 0;
  font-size: .8rem;
  font-weight: normal;
  color: #495867;
}
</style>
