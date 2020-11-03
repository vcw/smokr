<template>
  <div :class="b('wrapper')">
    <div :class="b()">
      <title-bar />
      <main :class="b('content')">
        <Nuxt />
      </main>
      <nav-bar />
    </div>
  </div>
</template>

<script>
import TitleBar from '~/components/TitleBar.vue';
import NavBar from '~/components/NavBar.vue';

export default {
  name: 'InternalLayout',
  components: {
    TitleBar,
    NavBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.internal-layout__wrapper {
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  background: #F2F2F2;
}

.internal-layout {
  font-family: 'Ubuntu', sans-serif;
}

.internal-layout__content {
  margin: 5rem 1rem;
}
</style>
