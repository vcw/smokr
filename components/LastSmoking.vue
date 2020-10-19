<template>
  <div v-if="lastSmoking" :class="b()">
    <span :class="b('text')">Последнее курение</span>
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

  margin-bottom: 1rem;
}

.last-smoking__text {
  display: block;
  font-size: 1.5rem;
  font-weight: normal;
}

.last-smoking__time {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.last-smoking__date {
  display: block;
  font-size: 1rem;
  font-weight: normal;

  color: #666;
}
</style>
