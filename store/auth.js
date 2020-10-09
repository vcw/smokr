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
  async onAuthStateChanged({ commit, dispatch }, { authUser }) {
    if (!!authUser) {
      await commit('SET_USER', authUser)
      await dispatch('userData/getSmokes', false, { root: true })
      this.$router.push('/dashboard')
      await dispatch('notifications/showNotification', {
        title: 'Успех!',
        text: `Вы вошли как ${authUser.email}`
      }, { root: true })

    } else {
      await commit('CLEAN_USER')
      this.$router.push('/')
      await dispatch('notifications/showNotification', {
        title: 'До встречи!',
        text: 'Вы вышли из аккаунта'
      }, { root: true })
    }
  }
}

export default {
    state,
    mutations,
    actions,
}
