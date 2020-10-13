<template>
  <div class="container">
    <!-- <vs-button
      v-if="!$store.state.auth.user"
      @click.prevent="isLoginPopupActive = !isLoginPopupActive"
    >
      Войти
    </vs-button> -->
    <!-- <vs-button
      v-if="$store.state.auth.user"
      :loading="loggingOut"
      @click.prevent="logout"
    >
      Выйти
    </vs-button> -->
    <s-button
      v-if="!$store.state.auth.user"
      color="indigo"
      @click="loginPopupActive = !loginPopupActive"
    >
      Войти
    </s-button>

    <s-button
      v-if="$store.state.auth.user"
      color="indigo"
      :loading="loggingOut"
      @click="logout"
    >
      Выйти
    </s-button>
    <LoginPopup v-model="loginPopupActive" />
  </div>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';
import LoginPopup from '~/components/LoginPopup.vue';

export default {
  components: {
    SButton,
    LoginPopup,
  },
  data() {
    return {
      loginPopupActive: false,
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
