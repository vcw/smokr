<template>
  <svg class="expand-icon" viewBox="0 0 12 12" width="100%" height="100%">
    <g>
      <line
        class="expand-icon__left"
        x1="2" :y1="top"
        x2="6.5" :y2="bottom"
        stroke="black" stroke-width="2" stroke-linecap="round"
      />
      <line
        class="expand-icon__right"
        x1="6.5" :y1="bottom"
        x2="10" :y2="top"
        stroke="black" stroke-width="2" stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    expanded: Boolean,
  },
  computed: {
    top() {
      return (this.expanded) ? 8 : 4;
    },
    bottom() {
      return (this.expanded) ? 4 : 8;
    },
  },
};
</script>

<style>

</style>
