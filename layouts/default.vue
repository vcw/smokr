<template>
  <div>
    <vs-navbar
      fixed
      shadow
    >
      <template #left>
        <h1 class="navbar__logo">
          smokr
        </h1>
      </template>

      <template #right>
        <Auth class="navbar__auth-button" />
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
  background-color: #D9D9D9;
}
.navbar__logo {
  font-size: 1.5rem;
  color: #000;
}

.navbar__auth-button {
  margin: .6rem 0;
}

.layout-container {
  margin-top: calc(44px + 1.2rem);
}

/* CSS components */

.link {
  font-weight: bold;
  line-height: 1rem;
  color: #353535;
  text-decoration: none;

  background: linear-gradient(0deg, rgba(40,75,99,1) 0%, rgba(60,110,113,1) 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
