<template>
  <div class="extended-day-stats">
    <div v-for="smoke in smokes" :key="smoke.toISOString()" class="extended-day-stats__smoke">
      <span class="extended-day-stats__timestamp">
        {{ smoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) }}
      </span>
      <s-button class="button_alert button_type_default" @click="removeSmoke(smoke)">
        Удалить
      </s-button>
    </div>
  </div>
</template>

<script>
import sButton from '~/components/ui/sButton.vue';

export default {
  components: {
    sButton,
  },
  props: {
    smokes: {
      required: true,
      type: Array,
    },
  },
  methods: {
    removeSmoke(smoke) {
      this.$store.dispatch('userData/removeSmoke', smoke);
    },
  },
};
</script>

<style>
.extended-day-stats {
  margin-top: .3rem;
  padding: .6rem;

  border-radius: .6rem;
  background: #eee;
}

.extended-day-stats__smoke {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .2rem 0;
}

.extended-day-stats__smoke:not(:last-child) {
  border-bottom: 1px solid #9D9595;
}
</style>
