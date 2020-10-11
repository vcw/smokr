const mutations = {
  SET_NOTIFICATION(state, { title, text }) {
    state.notification = {};
    state.notification.title = title;
    state.notification.text = text;
  },

  CLEAR_NOTIFICATION(state) {
    state.notification = null;
  },
};

const actions = {
  async showNotification({ commit }, { title, text }) {
    await commit('SET_NOTIFICATION', { title, text });
    await commit('CLEAR_NOTIFICATION');
  },
};

const state = () => ({
  notification: null,
});

export default {
  state,
  mutations,
  actions,
};
