<template>
  <div
    class="extended-day-stats-entry"
  >
    <span class="extended-day-stats-entry__timestamp">
      {{ smoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) }}
    </span>
    <s-button
      class="extended-day-stats-entry__actions-button"
      color="white"
      size="small"
      @click="popup = !popup"
    >
      <i-actions />
    </s-button>
    <smoking-actions-popup v-model="popup" :smoking="smoke" />
  </div>
</template>

<script>
import SmokingActionsPopup from '~/components/SmokingActionsPopup.vue';
import SButton from '~/components/ui/SButton.vue';
import IActions from '~/components/icons/IActions.vue';

export default {
  name: 'ExtendedDayStatsEntry',
  components: {
    SmokingActionsPopup,
    SButton,
    IActions,
  },
  props: {
    smoke: {
      required: true,
      type: Date,
    },
  },
  data() {
    return {
      popup: false,
    };
  },
};
</script>

<style>
.extended-day-stats-entry {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .2rem 0;
}

.extended-day-stats-entry__actions-button {
  width: 2rem;
  height: 2rem;
}
</style>
