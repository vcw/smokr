<template>
  <s-card>
    <login-registration-form :class="b('form')" />
  </s-card>
</template>

<script>
import SCard from '~/components/ui/SCard.vue';
import LoginRegistrationForm from '~/components/LoginRegistrationForm.vue';

export default {
  name: 'SignInPage',
  components: {
    SCard,
    LoginRegistrationForm,
  },
  layout: 'internal',
  beforeMount() {
    this.$store.dispatch('navigation/init', {
      title: 'Вход',
      back: '/',
    });
  },
};
</script>

<style>
.sign-in-page__form {
  width: 100%;
}
</style>
