<template>
  <form :class="b()">
    <s-input
      v-model="email"
      :class="b('input')"
      type="email"
      placeholder="E-mail"
    />

    <s-input
      v-model="password"
      :class="b('input')"
      type="password"
      placeholder="Пароль"
    />

    <s-input
      v-if="toggleRegistration"
      v-model="confirmation"
      :class="b('input')"
      type="password"
      placeholder="Повторите пароль"
    />

    <s-button
      v-if="!toggleRegistration"
      :class="b('submit')"
      :loading="loading"
      color="indigo"
      @click="login"
    >
      Войти
    </s-button>

    <s-button
      v-if="toggleRegistration"
      :class="b('submit')"
      :loading="loading"
      color="indigo"
      @click="register"
    >
      Зарегистрироваться
    </s-button>
  </form>
</template>

<script>
import SInput from '~/components/ui/SInput.vue';
import SButton from '~/components/ui/SButton.vue';

export default {
  name: 'LoginRegistrationForm',
  components: {
    SInput,
    SButton,
  },
  props: {
    toggleRegistration: Boolean,
  },
  data() {
    return {
      loading: false,
      email: '',
      password: '',
      confirmation: '',
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password,
        );
        this.$emit('success');
      } catch (error) {
        this.$vs.notification({
          title: 'Неприятность...',
          text: 'Произошла ошибка при входе :(',
        });
      }
      this.loading = false;
    },

    async register() {
      if (this.confirmation === this.password) {
        this.loading = true;
        try {
          await this.$fireAuth.createUserWithEmailAndPassword(
            this.email,
            this.password,
          );
          this.$emit('success');
        } catch (error) {
          this.$vs.notification({
            title: 'Неприятность...',
            text: 'Произошла ошибка при регистрации :(',
          });
        }
        this.loading = false;
      } else {
        this.$vs.notification({
          title: 'Упс...',
          text: 'Пароли не совпадают',
        });
      }
    },
  },
};
</script>

<style>
.login-registration-form {
  display: flex;
  flex-direction: column;
}

.login-registration-form__input {
  margin-top: 1.5rem;
}

.login-registration-form__submit {
  margin-top: 2.1rem;
}
</style>
