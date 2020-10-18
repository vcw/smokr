<template>
  <button
    :class="b({size, color, loading})"
    :disabled="loading || disabled"
    @click.prevent="$emit('click')"
  >
    <div :class="b('content')">
      <slot />
    </div>
    <span v-if="badge" :class="b('badge', {hidden: displayBadge})">{{ badge }}</span>
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
    displayBadge: Boolean,
    loading: Boolean,
    disabled: Boolean,
  },
};
</script>

<style>

/* Block */

.s-button {
  appearance: none;
  position: relative;
  display: block;

  padding: .6rem;

  font-size: 1rem;
  line-height: 1;

  border: none;
  border-radius: .6rem;

  background: #D9D9D9;

  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .1);
}

/* Element: content */

.s-button__content {
  min-width: 1rem;
  min-height: 1rem;
}

/* Block modifier: color */

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

/* Block modifier: size */

.s-button_size_large {
  padding: .8rem;

  font-size: 1.2rem;
  font-weight: bold;
}

.s-button_size_large .s-button__content {
  min-width: 1.2rem;
  min-height: 1.2rem;
}

.s-button_size_small {
  padding: .3rem;
}

/* Element: badge */

.s-button__badge {
  position: absolute;
  top: -.3rem;

  padding: .2rem;

  width: 1.6rem;

  color: #fff;
  font-size: .8rem;
  font-weight: bold;

  background: #353535;

  border-radius: .6rem;

  transform: scale(1);
  transition: transform .3s;
}

.s-button__badge_hidden {
  transform: scale(0);
}
</style>
