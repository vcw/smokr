<template>
  <div>
    <stats />
  </div>
</template>

<script>
import Stats from '~/components/Stats.vue';

export default {
  components: {
    Stats,
  },
  layout: 'internal',
  beforeMount() {
    this.$store.dispatch('navigation/init', {
      title: 'Статистика',
      navbar: true,
    });
  },
};
</script>
