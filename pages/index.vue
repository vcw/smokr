<template>
  <div :class="b()">
    <h1 :class="b('title')">Smokr</h1>
    <h2 :class="b('subtitle')">трекер курений</h2>
    <div :class="b('line')" />
    <s-button
      :class="b('sign-in-button')"
      size="large"
      color="fiord"
      @click="goToSignIn"
    >
      Вход
    </s-button>
  </div>
</template>

<script>

export default {
  name: 'Index',
  components: {},
  layout: 'default',
  methods: {
    goToSignIn() {
      this.$router.push('/sign-in');
    },
  },
};
</script>

<style>
.index {
  padding: 1rem;
  padding-right: 0;
}

.index__title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #495867;
}

.index__subtitle {
  margin-bottom: .5rem;

  font-size: 1rem;
  font-weight: normal;
  color: #495867;

}

.index__line {
  height: 1rem;

  background: linear-gradient(90deg, #25BB85 0%, #618CCC 100%);
}

.index__sign-in-button {
  margin: 1rem auto;
}
</style>
