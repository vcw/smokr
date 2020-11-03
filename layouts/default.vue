<template>
  <div>
    <div class="layout-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultLayout',
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
    Ubuntu,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (max-width: 325px) {
  html {
    font-size: 14px;
  }
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
.default-layout__logo {
  align-self: start;
  font-size: 1.5rem;
  color: #353535;
}

.layout-container {
  margin-top: 4rem;
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
