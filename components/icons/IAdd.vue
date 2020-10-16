<template>
  <svg :class="b()" viewBox="0 0 12 12">
    <line x1="1" y1="6" x2="11" y2="6" :stroke="color" stroke-width="2" stroke-linecap="round" />
    <line x1="6" y1="1" x2="6" y2="11" :stroke="color" stroke-width="2" stroke-linecap="round" />
  </svg>
</template>

<script>
export default {
  name: 'IAdd',
  props: {
    color: {
      default: '#000',
      type: String,
    },
  },
};
</script>

<style>
.i-add {
  display: block;
}
</style>
