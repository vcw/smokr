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
  </div>
</template>

<script>
import sCard from '~/components/ui/sCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    sCard
  },
  data () {
    return {
      doSmokeLoading: false
    }
  },
  computed: {
    ...mapState({
      lastSmoke: (state) => (!!state.userData.lastSmoke) ? state.userData.lastSmoke.timestamp : null
    }),
    lastSmokeTime() {
      return `${this.lastSmoke.getHours()}:${this.lastSmoke.getMinutes()}`
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
</style>
