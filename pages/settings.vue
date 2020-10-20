<template>
  <s-card :class="b()">
    <s-button :class="b('button')" @click="$router.push('/dashboard')">
      Назад
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
  methods: {
    async clearCache() {
      const keys = await caches.keys();
      keys.forEach((key) => caches.delete(key));
    },
    update() {
      window.location.reload();
    },
  },
};
</script>

<style>
.settings {
  margin: .6rem;
}

.settings__button {
  margin-bottom: .6rem;
}
</style>
