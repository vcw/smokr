<template>
  <s-card :class="b()">
    <s-button :class="b('button')" @click="signOut">
      Выйти
    </s-button>
    <s-button :class="b('button')" @click="clearCache">
      Очистить кэш
    </s-button>
    <s-button :class="b('button')" @click="update">
      Обновить
    </s-button>
  </s-card>
</template>

<script>
export default {
  name: 'Settings',
  layout: 'internal',
  beforeMount() {
    this.$store.dispatch('navigation/init', {
      title: 'Настройки',
      navbar: true,
    });
  },
  methods: {
    async clearCache() {
      const keys = await caches.keys();
      keys.forEach((key) => caches.delete(key));
    },
    update() {
      window.location.reload();
    },
    async signOut() {
      await this.$fireAuth.signOut();
    },
  },
};
</script>

<style>
.settings__button {
  margin-bottom: .6rem;
}
</style>
