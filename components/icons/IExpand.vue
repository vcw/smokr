<template>
  <svg v-bem class="expand-icon" viewBox="0 0 12 12">
    <line
      class="expand-icon__left"
      x1="2" y1="4"
      x2="6.5" y2="8"
      stroke="black" stroke-width="2" stroke-linecap="round"
    />
    <line
      class="expand-icon__right"
      x1="6.5" y1="8"
      x2="10" y2="4"
      stroke="black" stroke-width="2" stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'IExpand',
};
</script>

<style>
.i-expand {
  display: block;
}
</style>
