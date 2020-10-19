<template>
  <div :class="b()">
    <s-card :class="b('actions')">
      <last-smoking />
      <add-smoking />
    </s-card>

    <stats />

    <s-button
      :class="b('settings')"
      @click="$router.push('/settings')"
    >
      <i-settings />
    </s-button>
  </div>
</template>

<script>
import SCard from '~/components/ui/SCard.vue';
import SButton from '~/components/ui/SButton.vue';
import ISettings from '~/components/icons/ISettings.vue';
import Stats from '~/components/Stats.vue';
import LastSmoking from '~/components/LastSmoking.vue';
import AddSmoking from '~/components/AddSmoking.vue';

export default {
  name: 'Dashboard',
  components: {
    SCard,
    SButton,
    ISettings,
    Stats,
    LastSmoking,
    AddSmoking,
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

.dashboard__settings {
  margin-top: 1rem;
}
</style>
