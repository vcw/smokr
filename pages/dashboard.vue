<template>
  <div class="dashboard">
    <s-card class="dashboard__actions">
      <last-smoking v-if="lastSmoke" :smoking="lastSmoke" />
      <add-smoking />
    </s-card>

    <s-card v-if="smokes">
      <day-stats
        v-for="day in smokes"
        :key="day.date"
        class="dashboard__day-stats"
        :day="day"
        :max="dailyMax"
      />
    </s-card>
    <s-button
      v-bem:settings
      @click="$router.push('/settings')"
    >
      <i-settings />
    </s-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SCard from '~/components/ui/SCard.vue';
import SButton from '~/components/ui/SButton.vue';
import ISettings from '~/components/icons/ISettings.vue';
import DayStats from '~/components/DayStats.vue';
import LastSmoking from '~/components/LastSmoking.vue';
import AddSmoking from '~/components/AddSmoking.vue';

export default {
  name: 'Dashboard',
  components: {
    SCard,
    SButton,
    ISettings,
    DayStats,
    LastSmoking,
    AddSmoking,
  },
  computed: {
    ...mapState({
      lastSmoke: (state) => state.userData.lastSmoke,
      smokes: (state) => state.userData.smokesV2,
      dailyMax: (state) => state.userData.dailyMax,
    }),
  },
};
</script>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: .6rem;
}

.dashboard__actions {
  margin-bottom: .6rem;
}

.dashboard__day-stats:not(:last-of-type) {
  margin-bottom: .7rem;
}

.dashboard__settings {
  margin-top: 1rem;
}
</style>
