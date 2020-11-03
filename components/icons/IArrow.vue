<template>
  <svg
    :class="b()"
    viewBox="0 0 20 20"
    fill="none"
    :stroke="color"
    stroke-width="3"
  >
    <path
      :style="`transform:rotate(${rotate}deg); transform-origin: center center;`"
      stroke-linecap="round"
      d="M13.3333 3.33337L6.66665 10M6.66665 10L13.3333 16.6667"
    />
  </svg>
</template>

<script>
export default {
  name: 'IArrow',
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    color: {
      type: String,
      default: '#000',
    },
  },
  computed: {
    rotate() {
      return {
        left: '0',
        top: '90',
        right: '180',
        bottom: '270',
      }[this.direction];
    },
  },
};
</script>

<style>
.i-arrow {
  display: block;
}
</style>
