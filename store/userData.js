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
        smoke = smoke.toISOString().split('T')[0]
        if (!!accumulator[smoke]) {
          accumulator[smoke] += 1
        } else {
          accumulator[smoke] = 1
        }
        return accumulator
      }, {})
      const preparedStats = Object.keys(stats).map((date) => ({
        x: date,
        y: stats[date]
      }))
      console.log(preparedStats)
      commit('SET_STATS', preparedStats)
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
