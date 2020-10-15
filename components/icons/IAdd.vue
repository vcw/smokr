<template>
  <svg viewBox="0 0 12 12" width="100%" height="100%">
    <g>
      <line x1="1" y1="6" x2="11" y2="6" :stroke="color" stroke-width="2" stroke-linecap="round" />
      <line x1="6" y1="1" x2="6" y2="11" :stroke="color" stroke-width="2" stroke-linecap="round" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      default: '#000',
      type: String,
    },
  },
};
</script>
