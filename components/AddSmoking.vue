<template>
  <div :class="b()">
    <s-button
      :class="b('button')"
      color="ming"
      size="large"
      :loading="smokingLoading"
      @click="smoke"
    >
      Совершить курение
    </s-button>

    <s-button
      :class="b('button')"
      color="ming"
      size="large"
      @click="openCustomSmokingPopup"
    >
      <i-add color="#fff" />
    </s-button>

    <custom-smoking-popup v-model="customSmoking" />
  </div>
</template>

<script>
import SButton from '~/components/ui/SButton.vue';
import IAdd from '~/components/icons/IAdd.vue';
import CustomSmokingPopup from '~/components/CustomSmokingPopup.vue';

export default {
  name: 'AddSmoking',
  components: {
    SButton,
    IAdd,
    CustomSmokingPopup,
  },
  data() {
    return {
      smokingLoading: false,
      customSmoking: false,
    };
  },
  methods: {
    async smoke() {
      const timestamp = new Date();
      this.smokingLoading = true;
      const response = await this.$store.dispatch('userData/doSmokeV2', timestamp);
      this.$vs.notification(response.notification);
      this.smokingLoading = false;
    },
    openCustomSmokingPopup() {
      this.customSmoking = true;
    },
  },
};
</script>

<style>
.add-smoking {
    display: flex;
}

.add-smoking__button:not(last-child) {
  margin-right: .6rem;
}
</style>
