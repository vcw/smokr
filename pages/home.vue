<template>
  <s-card
    :class="b()"
  >
    <last-smoking :class="b('last-smoking')" />
    <add-smoking />
  </s-card>
</template>

<script>
import LastSmoking from '~/components/LastSmoking.vue';
import AddSmoking from '~/components/AddSmoking.vue';
import SCard from '~/components/ui/SCard.vue';

export default {
  name: 'HomePage',
  components: {
    LastSmoking,
    AddSmoking,
    SCard,
  },
  layout: 'internal',
  beforeMount() {
    this.$store.dispatch('navigation/init', {
      title: 'Главная',
      navbar: true,
    });
  },
};
</script>

<style>
.home-page__last-smoking {
  margin-bottom: 1rem;
}
</style>
