<template>
  <div class="dashboard">
    <div class="dashboard__actions">
      <s-card class="dashboard__card">
        Последнее курение: {{ lastSmoke.getHours() }}:{{ lastSmoke.getMinutes() }}

        <vs-button
        @click.prevent="smoke"
        :loading="doSmokeLoading"
        size="xl"
        success
        >
          Совершить курение
        </vs-button>
      </s-card>
      
    </div>
  </div>
</template>

<script>
import sCard from '~/components/ui/sCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    sCard
  },
  data () {
    return {
      doSmokeLoading: false
    }
  },
  computed: {
    ...mapState({
      lastSmoke: (state) => state.userData.lastSmoke.timestamp
    })
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

.dashboard__card {

}
</style>
