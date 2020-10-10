const state = () => ({
  smokes: null,
  lastSmoke: null,
  stats: null,
})

const mutations = {
  SET_SMOKES(state, smokes) {
    state.smokes = smokes
    state.lastSmoke = (!!smokes) ? smokes[0] : null
  },
  CLEANUP_SMOKES(state) {
    state.smokes = null
  },
  SET_STATS(state, stats) {
    state.stats = stats
  },
  CLEAR_STATS(state) {
    state.stats = null
  }
}

const actions = {
  async getSmokes({ commit, rootState }) {
    const collection = await this.$fireStore.collection('users').doc(rootState.auth.user.uid).collection('smokes');
    const smokes = await collection.orderBy("timestamp", "desc").get()

    const processedSmokes = []
    if (!!smokes) {
      smokes.forEach( (smoke) => processedSmokes.push({
        id: smoke.id,
        timestamp:  smoke.data().timestamp.toDate()
      }))
    }

    commit('SET_SMOKES', processedSmokes)
  },

  async doSmoke({ dispatch, rootState }, smokeData) {
    const { timestamp } = smokeData

    try {
      const collection = await this.$fireStore.collection('users').doc(rootState.auth.user.uid).collection('smokes');
      await collection.add({
        timestamp
      })
      dispatch('getSmokes')
      dispatch('notifications/showNotification', {
        title: 'Свершилось курение!',
        text: 'Здоровью нанесён непоправимый урон :('
      }, { root: true })
    } catch (error) {
      dispatch('notifications/showNotification', {
        title: 'Произошла ошибка!',
        text: 'Нам очень жаль' + error
      }, { root: true })
    }
  },

  getStats({ state, commit }) {
    if (!!state.smokes) {
      const smokes = state.smokes
      const stats = smokes.reduce((accumulator, smoke) => {
        smoke = new Date(smoke.timestamp)
        const date = smoke.toISOString().split('T')[0]
        if (!!accumulator[date]) {
          accumulator[date].push(smoke)
          accumulator[date].sort()
        } else {
          accumulator[date] = [smoke]
        }
        return accumulator
      }, {})
      const sortedStats = Object.keys(stats).map(date => ({
        date,
        total: stats[date].length,
        data: stats[date]
      })).sort((a, b) => (a.date < b.date) ? 1 : -1)
      const max = Math.max(...sortedStats.map(day => day.total))
      commit('SET_STATS', {
        data: sortedStats,
        max,
      })
    } else {
      commit('CLEAR_STATS')
    }
  },
}

export default {
  state,
  mutations,
  actions
}
