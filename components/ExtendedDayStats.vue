<template>
  <div class="extended-day-stats">
    <extended-day-stats-entry
      v-for="smoke in smokes"
      :key="smoke.toISOString()"
      :smoke="smoke"
    />
  </div>
</template>

<script>
import ExtendedDayStatsEntry from '~/components/ExtendedDayStatsEntry.vue';

export default {
  components: {
    ExtendedDayStatsEntry,
  },
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
