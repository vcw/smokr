<template>
  <portal>
    <transition name="fade">
      <div v-if="open" :class="b('container')">
        <div v-if="open" :class="b({ open })">
          <s-button
            :class="b('close-button')"
            color="white"
            @click="close"
          >
            <i-close color="#000" />
          </s-button>
          <slot />
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal';
import IClose from '~/components/icons/IClose.vue';

export default {
  name: 'SDialog',
  components: {
    IClose,
    Portal,
  },
  props: {
    value: Boolean,
  },
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    close() {
      this.open = false;
    },
  },
};
</script>

<style>
.s-dialog {
  position: relative;

  margin: auto;
  padding: 1.2rem;

  width: 20rem;
  max-width: 80%;
  min-height: 5rem;

  border-radius: 1.2rem;

  background: #fff;

  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .1);
}

.s-dialog__container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;

  height: 100%;
  max-height: 100vh;
  width: 100%;

  background: rgba(0, 0, 0, .2);

  z-index: 10000;
}

.s-dialog__close-button {
  position: absolute;
  top: -.6rem;
  right: -.6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .s-dialog {
  animation: zoom-in .4s ease;
}

.fade-leave-active .s-dialog {
  animation: zoom-out .4s ease-in-out;
}

@keyframes zoom-in {
  0% {
    transform: scale(.8);
  }

  40% {
    transform: scale(1.05)
  }

  80% {
    transform: scale(.98);
  }

  100%{
    transform: scale(1);
  }
}

@keyframes zoom-out {
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(0);
  }

  100% {
    transform: scale(0);
  }
}
</style>
