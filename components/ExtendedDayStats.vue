<template>
  <div class="extended-day-stats">
    <div v-for="smoke in smokes" :key="smoke.toISOString()" class="extended-day-stats__smoke">
      <span class="extended-day-stats__timestamp">
        {{ smoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smokes: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
.extended-day-stats {
  margin-top: .3rem;
  padding: .6rem;

  border-radius: .6rem;
  background: #eee;
}
</style>
