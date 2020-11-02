/* eslint-disable max-len */
<template>
  <svg
    :class="b()"
    :fill="color"
    viewBox="0 0 102 102"
  >
    <path d="M71.059 78.754A3.187 3.187 0 0076.5 76.5V51a3.187 3.187 0 10-6.375 0v25.5c0 .845.336 1.656.934 2.254zM48.746 78.754a3.187 3.187 0 005.441-2.254v-51a3.187 3.187 0 10-6.374 0v51c0 .845.335 1.656.933 2.254zM26.434 78.754a3.187 3.187 0 005.441-2.254V38.25a3.187 3.187 0 10-6.375 0V76.5c0 .845.336 1.656.934 2.254z" />
  </svg>
</template>

<script>
export default {
  name: 'IStats',
  props: {
    color: {
      type: String,
      default: '#000',
    },
  },
};
</script>

<style>
.i-stats {
  display: block;
}
</style>
