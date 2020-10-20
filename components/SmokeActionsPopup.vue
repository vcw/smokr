<template>
  <s-dialog v-model="dialog">
    <div :class="b('header')">
      <h2>{{ time }}</h2>
      <h3 :class="b('date')">
        {{ date }}
      </h3>
    </div>

    <span :class="b('main')">
      Вы уверены, что хотите удалить курение?
    </span>

    <div :class="b('footer')">
      <s-button @click="closePopup">
        Отменить
      </s-button>

      <s-button
        :loading="deleting"
        color="red"
        @click="removeSmoking()"
      >
        Удалить
      </s-button>
    </div>
  </s-dialog>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';
import SDialog from '~/components/ui/SDialog.vue';

export default {
  name: 'SmokingActionsPopup',
  components: {
    SButton,
    SDialog,
  },
  props: {
    value: Boolean,
    smoking: {
      required: true,
      type: Date,
    },
  },
  data() {
    return {
      deleting: false
    }
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
    date() {
      return this.smoking.toLocaleDateString('ru-RU');
    },
    time() {
      return this.smoking.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    },
  },
  methods: {
    async removeSmoking() {
      this.deleting = true;
      const response = await this.$store.dispatch('userData/removeSmoke', this.smoking);
      this.deleting = false;
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
.smoking-actions-popup__header {
  text-align: center;
}

.smoking-actions-popup__date {
  font-size: 1rem;
  font-weight: normal;

  color: #666;
}

.smoking-actions-popup__main {
  display: block;
  margin: 1.2rem 0;
}

.smoking-actions-popup__footer {
  display: flex;
  justify-content: space-between;
}
</style>
