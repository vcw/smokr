<template>
  <label class="input">
    <input class="input__field" :type="type" :placeholder="placeholder" v-model="inputValue"/>
    <span class="input__label">{{ placeholder }}</span>
  </label>
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: String,
    value: String,
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
}
</script>

<style>

:root {
  --s-input-font-family: inherit;
  --s-input-font-size: 1rem;
  --s-input-border-radius: .6rem;
  --s-input-padding-vertical: .5rem;
  --s-input-padding-horizontal: .6rem;
  --s-input-background-color: #F3F7F7;
  --s-input-placeholder-slide-y: calc((100% + var(--s-input-padding-vertical)) * -1);
  --s-input-placeholder-slide-x: calc(var(--s-input-padding-horizontal) / -2);
  --s-input-placeholder-scale: .8;
}

.input {
  display: block;

  position: relative;
}

.input__field {
  padding: var(--s-input-padding-vertical) var(--s-input-padding-horizontal);

  width: 100%;

  font-family: var(--s-input-font-family);
  font-size: var(--s-input-font-size);

  border: none;
  border-radius: var(--s-input-border-radius);

  background-color: var(--s-input-background-color);
}

.input__field:focus {
  outline: none;
}

.input__field::placeholder {
  opacity: 0;
}

.input__label {
  display: block;

  position: absolute;
  top: var(--s-input-padding-vertical);
  left: var(--s-input-padding-horizontal);
  
  cursor: text;
  user-select: none;
  
  font-family: var(--s-input-font-family);
  font-size: var(--s-input-font-size);
  opacity: .4;
  
  transition: all 0.25s ease-in-out;
}

.input__field:not(:placeholder-shown) + .input__label, .input__field:focus + .input__label {
  opacity: 1;
  transform-origin: 0% 0%;
  transform: translate(var(--s-input-placeholder-slide-x),
                       var(--s-input-placeholder-slide-y))
             scale(var(--s-input-placeholder-scale));
}

</style>