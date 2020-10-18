<template>
  <vs-dialog v-model="dialog">
    <template #header>
      <strong>{{ smoke.toLocaleDateString('ru-RU') }}</strong>
    </template>
    <span>
      Вы уверены, что хотите удалить курение, совершённое в
      {{ smoke.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) }}?
    </span>
    <template #footer>
      <div class="smoke-actions-popup__actions">
        <s-button @click="closePopup">
          Отменить
        </s-button>
        <s-button
          color="red"
          @click="removeSmoke(smoke)"
        >
          Удалить
        </s-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';

export default {
  name: 'SmokeActionPopup',
  components: {
    SButton,
  },
  props: {
    value: Boolean,
    smoke: {
      required: true,
      type: Date,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    async removeSmoke(smoke) {
      const response = await this.$store.dispatch('userData/removeSmoke', smoke);
      this.$vs.notification(response.notification);
      this.dialog = false;
    },
    closePopup() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.smoke-actions-popup__actions {
  display: flex;
  justify-content: space-between;
}
</style>
