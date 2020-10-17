<template>
  <div :class="b()">
    <span :class="b('text')">Последнее курение</span>
    <strong :class="b('time')">{{ time }}</strong>
    <span :class="b('date')">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: 'LastSmoking',
  props: {
    smoking: {
      required: true,
      type: Date,
    },
  },
  computed: {
    time() {
      return this.smoking.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    },
    date() {
      return this.smoking.toLocaleDateString('ru-RU');
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
