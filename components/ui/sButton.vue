<template>
  <button class="button" @click.prevent="$emit('click')">
    <div class="button__content">
      <expand :expanded="expanded" />
    </div>
  </button>
</template>

<script>
import expand from '~/components/icons/expand.vue';

export default {
  components: {
    expand,
  },
  props: {
    expanded: Boolean,
  },
};
</script>

<style>
.button {
  appearance: none;
  display: block;

  padding: .6rem;

  border: none;
  border-radius: .6rem;

  background: #eee;
}

.button__content {
  width: 100%;
  height: 100%;
}

.button_border {
  border: 2 px solid lightblue;
}
</style>
