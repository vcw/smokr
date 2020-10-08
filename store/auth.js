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
      this.$router.push('/dashboard')
    } else {
      await commit('CLEAN_USER')
      this.$router.push('/')
    }
  }
}

export default {
    state,
    mutations,
    actions,
}
