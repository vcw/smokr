const state = () => ({
    user: null
})

const mutations = {
    SET_USER(state, { uid, email }) {
      state.user = {
        uid,
        email,
      }
    },

    CLEAN_USER(state) {
      state.user = null
    }
}

const actions = {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!!authUser) {
      await commit('SET_USER', authUser)
    } else {
      await commit('CLEAN_USER')
    }
  }
}

export default {
    state,
    mutations,
    actions,
}
