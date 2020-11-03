<template>
  <nav v-if="show" :class="b()">
    <router-link
      :class="b('link', { active: path === '/home' })"
      to="/home"
    >
      <i-home :class="b('icon')" />
    </router-link>

    <router-link
      :class="b('link', { active: path === '/stats' })"
      to="/stats"
    >
      <i-stats :class="b('icon')" />
    </router-link>

    <router-link
      :class="b('link', { active: path === '/settings' })"
      to="/settings"
    >
      <i-settings
        :class="b('icon')"
        color=""
      />
    </router-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import IHome from '~/components/icons/IHome.vue';
import IStats from '~/components/icons/IStats.vue';
import ISettings from '~/components/icons/ISettings.vue';

export default {
  name: 'NavBar',
  components: {
    IHome,
    IStats,
    ISettings,
  },
  computed: {
    ...mapState({
      show: (state) => state.navigation.showNavBar,
    }),
    path() {
      return this.$route.path;
    },
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: .5rem;
  width: 100%;
  background: #E9E9E9;
  border-top: .1rem solid #495867;
  z-index: 1000;
}

.nav-bar__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: .5rem;
}

.nav-bar__link_active {
  background: #CCC;
}

.nav-bar__icon {
  width: 2rem;
}
</style>
