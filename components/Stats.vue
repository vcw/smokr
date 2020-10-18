<template>
  <s-card
    v-if="smokings && smokings.length"
    :class="b()"
  >
    <day-stats
      v-for="day in smokings"
      :key="day.date"
      :class="b('day')"
      :day="day"
      :max="dailyMax"
    />
  </s-card>
</template>

<script>
import { mapState } from 'vuex';
import SCard from '~/components/ui/SCard.vue';
import DayStats from '~/components/DayStats.vue';

export default {
  name: 'Stats',
  components: {
    SCard,
    DayStats,
  },
  computed: {
    ...mapState({
      smokings: (state) => state.userData.smokesV2,
      dailyMax: (state) => state.userData.dailyMax,
    }),
  },
};
</script>
