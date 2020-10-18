<template>
  <s-dialog
    v-model="dialog"
    :class="b()"
  >
    <h2
      v-if="!toggleRegistration"
      :class="b('header')"
    >
      Вход
    </h2>
    <h2
      v-if="toggleRegistration"
      :class="b('header')"
    >
      Регистрация
    </h2>

    <login-registration-form
      :class="b('form')"
      :toggle-registration="toggleRegistration"
      @success="closePopup"
    />

    <div
      v-if="!toggleRegistration"
      :class="b('footer')"
    >
      Впервые здесь?
      <a
        class="link"
        href="#"
        @click.prevent="toggleRegistration = true"
      >
        Регистрация
      </a>
    </div>

    <div
      v-if="toggleRegistration"
      :class="b('footer')"
    >
      Уже зарегистрированы?
      <a
        class="link"
        href="#"
        @click.prevent="toggleRegistration = false"
      >
        Вход
      </a>
    </div>
  </s-dialog>
</template>

<script>
import SDialog from '~/components/ui/SDialog.vue';
import LoginRegistrationForm from '~/components/LoginRegistrationForm.vue';

export default {
  name: 'LoginPopup',
  components: {
    SDialog,
    LoginRegistrationForm,
  },
  props: {
    value: Boolean,
  },
  data: () => ({
    toggleRegistration: false,
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
  methods: {
    closePopup() {
      this.dialog = false;
    },
  },
};
</script>

<style>

.login-popup__header {
  text-align: center;
}

.login-popup__form {
  margin: .6rem 0;
}

.login-popup__footer {
  text-align: center;
}
</style>
