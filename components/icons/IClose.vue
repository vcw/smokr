<template>
  <svg :class="b()" viewBox="0 0 10 10">
    <line x1="2" y1="2" x2="8" y2="8" :stroke="color" stroke-width="2" stroke-linecap="round" />
    <line x1="8" y1="2" x2="2" y2="8" :stroke="color" stroke-width="2" stroke-linecap="round" />
  </svg>
</template>

<script>
export default {
  name: 'IClose',
  props: {
    color: {
      default: '#000',
      type: String,
    },
  },
};
</script>

<style>
.i-close {
  display: block;
}
</style>
