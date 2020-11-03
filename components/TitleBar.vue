<template>
  <header
    v-if="title"
    :class="b()"
  >
    <router-link
      v-if="back"
      :to="back"
    >
      <i-arrow color="#495867" />
    </router-link>

    <h1 :class="b('title')">
      {{ title }}
    </h1>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import IArrow from '~/components/icons/IArrow.vue';

export default {
  name: 'TitleBar',
  components: {
    IArrow,
  },
  computed: {
    ...mapState({
      title: (state) => state.navigation.pageTitle,
      back: (state) => state.navigation.backPath,
    }),
  },
};
</script>

<style>
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1.25rem 1fr;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem;
  height: 3.75rem;
  width: 100%;
  background: #fff;
  box-shadow: 0rem .25rem .5rem rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.title-bar__title {
  grid-column: 2 / 3;
  font-size: 1.5rem;
  font-weight: bold;
  color: #495867;
}
</style>
