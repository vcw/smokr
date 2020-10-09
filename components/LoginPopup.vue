<template>
  <vs-dialog v-model="dialog">
    <template #header>
      <strong v-if="!toggleSignUp">Вход</strong>
      <strong v-if="toggleSignUp">Регистрация</strong>
    </template>
    <form class="form">
      <s-input
        class="form__input"
        type="email"
        placeholder="E-mail"
        v-model="email"
      />

      <s-input
        class="form__input"
        type="password"
        placeholder="Пароль"
        v-model="password"
      />

      <vs-button
        class="form__submit"
        v-if="!toggleSignUp"
        block
        @click.prevent="onLoginButtonClick"
        :loading="loading"
      >
        Войти
      </vs-button>

      <vs-button
        class="form__submit"
        v-if="toggleSignUp"
        block
        @click.prevent="onSignUpButtonClick"
        :loading="loading"
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

  import { mapState } from 'vuex';

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
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      async onLoginButtonClick() {
        this.loading = true
        try {
          await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
          this.dialog = false
        } catch (error) {
          this.$store.dispatch('notifications/showNotification', {
            title: 'Неприятность...',
            text: 'Произошла ошибка при входе :('
          })
        }
        this.loading = false
      },

      async onSignUpButtonClick() {
        try {
          await this.$fireAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          )
        } catch (error) {
          this.$store.dispatch('notifications/showNotification', {
              title: 'Неприятность...',
              text: 'Произошла ошибка при регистрации :('
            })
        }
      }
    },
    watch: {
      dialog(isOpen) {
        if (!isOpen) {
          this.email = ''
          this.password = ''
          this.toggleSignUp = false
        }
      }
    }
  }
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
