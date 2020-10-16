<template>
  <div class="dashboard">
    <s-card class="dashboard__actions">
      <div v-if="lastSmoke" class="dashboard__last-smoke">
        <span class="dashboard__last-smoke-text">Последнее курение</span>
        <strong class="dashboard__last-smoke-time">{{ lastSmokeTime }}</strong>
        <span class="dashboard__last-smoke-date">{{ lastSmokeDate }}</span>
      </div>

      <div class="dashboard__add-smoking">
        <s-button
          v-bem:add-smoking.now
          color="ming"
          size="large"
          :loading="smokeLoading"
          @click="smoke"
        >
          Совершить курение
        </s-button>

        <s-button
          v-bem:add-smoking.custom
          color="ming"
          size="large"
          @click="customSmoking = !customSmoking"
        >
          <i-add color="#fff" />
        </s-button>

        <CustomSmokingPopup v-model="customSmoking" />
      </div>
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
import SCard from '~/components/ui/SCard.vue';
import SButton from '~/components/ui/SButton.vue';
import IAdd from '~/components/icons/IAdd.vue';
import DayStats from '~/components/DayStats.vue';
import CustomSmokingPopup from '~/components/CustomSmokingPopup.vue';

export default {
  name: 'Dashboard',
  components: {
    SCard,
    SButton,
    IAdd,
    DayStats,
    CustomSmokingPopup,
  },
  data() {
    return {
      smokeLoading: false,
      customSmoking: false,
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
      this.smokeLoading = true;
      const response = await this.$store.dispatch('userData/doSmokeV2', timestamp);
      this.$vs.notification(response.notification);
      this.smokeLoading = false;
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

  margin-bottom: 1rem;
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

.dashboard__add-smoking {
    display: flex;
}

.dashboard__add-smoking_now {
  margin-right: .6rem;
}

.dashboard__day-stats:not(:last-of-type) {
  margin-bottom: .7rem;
}
</style>
