<template>
  <s-card>
    <login-registration-form :registration="signUp" :class="b('form')" />
    <div
      v-if="!signUp"
      :class="b('footer')"
    >
      Впервые здесь?
      <a
        class="link"
        href="#"
        @click.prevent="signUp = true"
      >
        Регистрация
      </a>
    </div>

    <div
      v-if="signUp"
      :class="b('footer')"
    >
      Уже зарегистрированы?
      <a
        class="link"
        href="#"
        @click.prevent="signUp = false"
      >
        Вход
      </a>
    </div>
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
  data() {
    return {
      signUp: false,
    };
  },
  beforeMount() {
    this.$store.dispatch('navigation/init', {
      title: 'Вход',
      back: '/',
    });
  },
  methods: {
    toggleSignUp() {
      this.signUp = !this.signUp;
      this.$store.dispatch('navigation/init', {
        title: (this.signUp) ? 'Регистрация' : 'Вход',
        back: '/',
      });
    },
  },
};
</script>

<style>
.sign-in-page__form {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
