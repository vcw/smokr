<template>
  <vs-dialog v-model="dialog">
    <template #header>
      <strong v-if="!toggleSignUp">Вход</strong>
      <strong v-if="toggleSignUp">Регистрация</strong>
    </template>
    <form class="form">
      <vs-input
        label-placeholder="E-mail"
        v-model="email"
        type="email"
        block
      />

      <vs-input
        label-placeholder="Пароль"
        v-model="password"
        type="password"
        block
      />

      <vs-button
        v-if="!toggleSignUp"
        block
        @click.prevent="onLoginButtonClick"
        :loading="loading"
      >
        Войти
      </vs-button>

      <vs-button
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
  import { mapState } from 'vuex';

  export default {
    props: {
      value: Boolean,
    },
    data: () => ({
      email: 'test@test.org',
      password: 'testtest',
      toggleSignUp: false,
      loading: false,
    }),
    computed: {
      ...mapState({
        user: state => state.auth.user
      }),
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
        try {
          this.loading = true
          await this.$fireAuth.signInWithEmailAndPassword(this.email, this.password)
          this.loading = false
          this.dialog = false
          console.log(this.$store.state.auth.user)

        } catch (error) {
          console.log(error)
        }
      },

      async onSignUpButtonClick() {
        try {
          await this.$fireAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          )
        } catch (error) {
          console.log(error)
        }
      }
    },
    watch: {
      user(authUserObj) {
        if (authUserObj) {
          this.$vs.notification({
            title: 'Успех!',
            text: `Вы вошли как ${authUserObj.email}`
          })
        } else if (authUserObj === null) {
          this.$vs.notification({
            title: 'До встречи!',
            text: 'Вы вышли из аккаунта'
          })
        }

      }
    }
  }
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;

}
</style>
