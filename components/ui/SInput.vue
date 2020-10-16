<template>
  <label :class="b()">
    <input
      v-model="inputValue"
      :class="b('field')"
      :type="type"
      :placeholder="placeholder"
    >
    <span :class="b('label')">{{ placeholder }}</span>
  </label>
</template>

<script>
export default {
  name: 'SInput',
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    value: {
      required: true,
      type: String,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style>

/* Block */

.s-input {
  display: block;
  position: relative;
}

.s-input__field {
  padding: .6rem;

  width: 100%;

  font-family: inherit;
  font-size: 1rem;

  border: none;
  border-radius: .6rem;

  background: #F3F7F7;
}

/* Element: field */

.s-input__field:focus {
  outline: none;
}

.s-input__field::placeholder {
  opacity: 0;
}

/* Element: label */

.s-input__label {
  display: block;
  position: absolute;
  top: .6rem;
  left: .6rem;

  cursor: text;
  user-select: none;

  font-family: inherit;
  font-size: 1rem;

  opacity: .4;

  transition: all 0.25s ease-in-out;
}

/* Lable slide */

.s-input__field:not(:placeholder-shown) + .s-input__label, .s-input__field:focus + .s-input__label {
  opacity: 1;
  transform-origin: 0% 0%;
  transform: translate(-.3rem, calc((100% + .6rem) * -1))
             scale(.8);
}

</style>
