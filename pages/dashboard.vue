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
      try {
        const doc = await this.$fireStore.collection('users').doc(this.$store.state.auth.user.uid).collection('smokes');
        await doc.add({
          timestamp
        })
        this.$vs.notification({
          title: 'Свершилось курение!',
          text: 'Здоровью нанесён непоправимый урон :('
        })
      } catch (error) {
        this.$vs.notification({
          title: 'Произошла ошибка!',
          text: 'Нам очень жаль'
        })
      }
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
