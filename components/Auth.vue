<template>
  <div class="container">
    <vs-button
      v-if="!$store.state.auth.user"
      @click.prevent="isLoginPopupActive = !isLoginPopupActive"
    >
      Войти
    </vs-button>
    <vs-button
      v-if="$store.state.auth.user"
      :loading="loggingOut"
      @click.prevent="logout"
    >
      Выйти
    </vs-button>
    <LoginPopup v-model="isLoginPopupActive" />
  </div>
</template>

<script>
import LoginPopup from '~/components/LoginPopup.vue';

export default {
  components: {
    LoginPopup,
  },
  data() {
    return {
      isLoginPopupActive: false,
      loggingOut: false,
    };
  },
  methods: {
    async logout() {
      this.loggingOut = true;
      await this.$fireAuth.signOut();
      this.loggingOut = false;
    },
  },
};
</script>

<style>
</style>
