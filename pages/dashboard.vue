<template>
  <div class="dashboard">
    <s-card class="dashboard__actions">
      <div v-if="lastSmoke" class="dashboard__last-smoke">
        <span class="dashboard__last-smoke-text">Последнее курение</span>
        <strong class="dashboard__last-smoke-time">{{ lastSmokeTime }}</strong>
        <span class="dashboard__last-smoke-date">{{ lastSmokeDate }}</span>
      </div>

      <vs-button
        :loading="doSmokeLoading"
        size="xl"
        success
        @click.prevent="smoke"
      >
        Совершить курение
      </vs-button>
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
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sCard from '~/components/ui/sCard.vue';
import dayStats from '~/components/dayStats.vue';

export default {
  components: {
    sCard,
    dayStats,
  },
  data() {
    return {
      doSmokeLoading: false,
    };
  },
  computed: {
    ...mapState({
      lastSmoke: (state) => state.userData.lastSmoke,
      smokes: (state) => state.userData.smokesV2,
      dailyMax: (state) => state.userData.dailyMax,
    }),
    lastSmokeTime() {
      return this.lastSmoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    },
    lastSmokeDate() {
      return this.lastSmoke.toLocaleDateString('ru-RU');
    },
  },
  methods: {
    async smoke() {
      const timestamp = new Date();
      this.doSmokeLoading = true;
      const response = await this.$store.dispatch('userData/doSmokeV2', timestamp);
      this.$vs.notification(response.notification);
      this.doSmokeLoading = false;
    },
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

.dashboard__last-smoke {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard__last-smoke-text {
  display: block;
  font-size: 1.5rem;
  font-weight: normal;
}

.dashboard__last-smoke-time {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.dashboard__last-smoke-date {
  display: block;
  font-size: 1rem;
  font-weight: normal;

  color: #666;
}

.dashboard__day-stats:not(:last-of-type) {
  margin-bottom: .7rem;
}
</style>
