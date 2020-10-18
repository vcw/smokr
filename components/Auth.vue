<template>
  <div>
    <s-button
      v-if="!$store.state.auth.user"
      color="indigo"
      @click="openPopup"
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
  name: 'Auth',
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
    openPopup() {
      this.loginPopupActive = true;
    },
  },
};
</script>
