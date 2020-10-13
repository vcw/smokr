<template>
  <button v-bem="{ alert, color }" @click.prevent="$emit('click')">
    <div v-bem:content>
      <slot />
    </div>
    <span v-if="badge" v-bem:badge>{{ badge }}</span>
  </button>
</template>

<script>
export default {
  name: 'SButton',
  components: {
  },
  props: {
    alert: Boolean,
    color: {
      default: '',
      type: String,
    },
    badge: {
      default: null,
      type: Number,
    },
  },
};
</script>

<style>
.s-button {
  appearance: none;
  position: relative;
  display: block;

  padding: .6rem;

  border: none;
  border-radius: .6rem;

  background: #eee;
}

.s-button_color_red {
  background: #BA1F33;
  color: #fff;
}

.s-button_color_white {
  background: #fff;
}

.s-button_type_default {
  padding: .3rem;
}

.s-button__content {
  width: 100%;
  height: 100%;
}

.s-button__badge {
  position: absolute;
  top: -.3rem;

  padding: .1rem .2rem;

  width: 1.6rem;

  color: #fff;
  font-weight: bold;

  background: #2D2E2E;

  border-radius: .6rem;
}

.s-button_border {
  border: 2 px solid lightblue;
}
</style>
