<template>
  <div>
    <vs-navbar
      fixed
      shadow
    >
      <template #left>
        <strong>smokr</strong>
      </template>

      <template #right>
        <Auth />
      </template>
    </vs-navbar>
    <div class="layout-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Auth from '~/components/Auth.vue';

export default {
  components: {
    Auth,
  },
  middleware: [
    'authRedirect',
  ],
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  watch: {
    user(user) {
      if (user) {
        this.$vs.notification({
          title: 'Успех!',
          text: `Вы вошли как ${user.email}`,
        });
      } else {
        this.$vs.notification({
          title: 'До встречи!',
          text: 'Вы вышли из аккаунта',
        });
      }
    },
  },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #eee;
}

.layout-container {
  margin-top: calc(44px + .6rem);
}

/* Component styling */

.vs-input {
  font-size: 16px;
}

</style>
