<template>
  <vs-dialog v-model="dialog">
    <template #header>
      <strong v-if="!toggleSignUp">Вход</strong>
      <strong v-if="toggleSignUp">Регистрация</strong>
    </template>
    <form class="form">
      <s-input
        v-model="email"
        class="form__input"
        type="email"
        placeholder="E-mail"
      />

      <s-input
        v-model="password"
        class="form__input"
        type="password"
        placeholder="Пароль"
      />

      <vs-button
        v-if="!toggleSignUp"
        class="form__submit"
        block
        :loading="loading"
        @click.prevent="onLoginButtonClick"
      >
        Войти
      </vs-button>

      <vs-button
        v-if="toggleSignUp"
        class="form__submit"
        block
        :loading="loading"
        @click.prevent="onSignUpButtonClick"
      >
        Зарегистрироваться
      </vs-button>
    </form>

    <template #footer>
      <div class="footer-dialog">
        <div v-if="!toggleSignUp" class="new">
          Впервые здесь?
          <a href="#" @click.prevent="toggleSignUp = true">Регистрация</a>
        </div>

        <div v-if="toggleSignUp" class="new">
          Уже зарегистрированы?
          <a href="#" @click.prevent="toggleSignUp = false">Вход</a>
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import sInput from '~/components/ui/sInput.vue';

export default {
  components: {
    sInput,
  },
  props: {
    value: Boolean,
  },
  data: () => ({
    email: '',
    password: '',
    toggleSignUp: false,
    loading: false,
  }),
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    dialog(isOpen) {
      if (!isOpen) {
        this.email = '';
        this.password = '';
        this.toggleSignUp = false;
      }
    },
  },
  methods: {
    async onLoginButtonClick() {
      this.loading = true;
      try {
        await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password);
        this.dialog = false;
      } catch (error) {
        this.$store.dispatch('notifications/showNotification', {
          title: 'Неприятность...',
          text: 'Произошла ошибка при входе :(',
        });
      }
      this.loading = false;
    },

    async onSignUpButtonClick() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password,
        );
      } catch (error) {
        this.$store.dispatch('notifications/showNotification', {
          title: 'Неприятность...',
          text: 'Произошла ошибка при регистрации :(',
        });
      }
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}

.form__input {
  margin-bottom: 1.5em;
}

.form__input:last-of-type {
  margin-bottom: 2em;
}

.form__submit {
  margin: 0;
}
</style>
