<template>
  <button
    v-bem="{ color, size, loading }"
    :disabled="loading || disabled"
    @click.prevent="$emit('click')"
  >
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
    inline: Boolean,
    color: {
      default: '',
      type: String,
    },
    size: {
      default: '',
      type: String,
    },
    badge: {
      default: null,
      type: Number,
    },
    loading: Boolean,
    disabled: Boolean,
  },
};
</script>

<style>
.s-button {
  appearance: none;
  position: relative;
  display: block;

  padding: .6rem;

  font-size: 1rem;

  border: none;
  border-radius: .6rem;

  background: #D9D9D9;
}

.s-button_color_red {
  background: #BA1F33;
  color: #fff;
}

.s-button_color_white {
  background: #fff;
}

.s-button_color_indigo {
  background: #284B63;
  color: #fff;
}

.s-button_color_ming {
  background: #3C6E71;
  color: #fff;
}

.s-button_size_large {
  padding: .8rem;

  font-size: 1.2rem;
  font-weight: bold;
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
  font-size: .8rem;
  font-weight: bold;

  background: #353535;

  border-radius: .6rem;
}
</style>
