const mutations = {
  SET_USER(state, { uid, email }) {
    state.user = {
      uid,
      email,
    };
  },

  CLEAN_USER(state) {
    state.user = null;
  },
};

const actions = {
  async onAuthStateChanged({ commit, dispatch }, { authUser }) {
    if (authUser) {
      await commit('SET_USER', authUser);
      await dispatch('userData/getSmokesV2', false, { root: true });
      this.$router.push('/dashboard');
    } else {
      await commit('CLEAN_USER');
      await commit('userData/CLEAR_USER_DATA_V2', false, {
        root: true,
      });
      this.$router.push('/');
    }
  },
};

const state = () => ({
  user: null,
});

export default {
  state,
  mutations,
  actions,
};
