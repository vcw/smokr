<template>
  <div class="dashboard">
    <s-card class="dashboard__actions">
      <div class="dashboard__last-smoke" v-if="lastSmoke">
        <span class="dashboard__last-smoke-text">Последнее курение</span>
        <strong class="dashboard__last-smoke-time">{{ lastSmokeTime }}</strong>
        <span class="dashboard__last-smoke-date">{{ lastSmokeDate }}</span>
      </div>

      <vs-button
      @click.prevent="smoke"
      :loading="doSmokeLoading"
      size="xl"
      success
      >
        Совершить курение
      </vs-button>
    </s-card>

    <vs-button
      v-if="!stats && lastSmoke"
      @click.prevent="getstats"
      :loading="doSmokeLoading"
      size="xl"
      success
    >
      Показать статистику
    </vs-button>

    <s-card v-if="stats">
      <day-stats
        class="dashboard__day-stats"
        v-for="day in stats.data"
        :key="day.date"
        :day="day"
        :max="stats.max"
      />
    </s-card>
  </div>
</template>

<script>
import sCard from '~/components/ui/sCard.vue'
import dayStats from '~/components/dayStats.vue'
import { mapState } from 'vuex'

export default {
  components: {
    sCard,
    dayStats
  },
  data () {
    return {
      doSmokeLoading: false,
    }
  },
  computed: {
    ...mapState({
      lastSmoke: (state) => (!!state.userData.lastSmoke) ? state.userData.lastSmoke.timestamp : null,
      stats: (state) => state.userData.stats
    }),
    lastSmokeTime() {
      // return `${this.lastSmoke.getHours()}:${this.lastSmoke.getMinutes()}`
      return this.lastSmoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    },
    lastSmokeDate() {
      return this.lastSmoke.toLocaleDateString('ru-RU')
    },
  },
  methods: {
    async smoke () {
      const timestamp = new Date();
      this.doSmokeLoading = true;
      await this.$store.dispatch('userData/doSmoke', {
        timestamp
      })
      this.doSmokeLoading = false;
    },
    getstats() {
      this.$store.dispatch('userData/getStats')
    }
  }
}
</script>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: .6rem;
}

.dashboard__actions {
  margin-bottom: 1rem;
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
