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
      notification: (state) => state.notifications.notification,
    }),
  },
  watch: {
    notification(message) {
      if (message) {
        this.$vs.notification({
          title: message.title,
          text: message.text,
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
  margin-top: 50px;
}

/* Component styling */

.vs-input {
  font-size: 16px;
}

</style>
