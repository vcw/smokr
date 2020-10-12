<template>
  <button class="button" @click.prevent="$emit('click')">
    <div class="button__content">
      <expand :expanded="expanded" />
    </div>
    <span v-if="badge" class="button__badge">{{ badge }}</span>
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
    badge: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style>
.button {
  appearance: none;
  position: relative;
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

.button__badge {
  position: absolute;
  top: -.3rem;

  padding: .1rem .2rem;

  width: 1.6rem;

  color: #fff;
  font-weight: bold;

  background: #2D2E2E;

  border-radius: .6rem;
}

.button_border {
  border: 2 px solid lightblue;
}
</style>
