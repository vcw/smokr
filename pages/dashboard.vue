<template>
  <div class="dashboard">
    <div class="dashboard__actions">
      <vs-button
      @click.prevent="smoke"
      :loading="doSmokeLoading"
      size="xl"
      success
      >
        Совершить курение
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doSmokeLoading: false
    }
  },
  methods: {
    async smoke () {
      const timestamp = new Date();
      this.doSmokeLoading = true;
      await this.$store.dispatch('userData/doSmoke', {
        timestamp
      })
      this.doSmokeLoading = false;
    }
  }
}
</script>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
