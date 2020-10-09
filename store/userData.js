const state = () => ({
  smokes: null,
  lastSmoke: null,
})

const mutations = {
  SET_SMOKES(state, smokes) {
    state.smokes = smokes
    state.lastSmoke = (!!smokes) ? smokes[0] : null
  },
  CLEANUP_SMOKES(state) {
    state.smokes = null
  },
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
  }
}

export default {
  state,
  mutations,
  actions
}