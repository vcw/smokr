const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title;
  },
  SET_BACK_PATH(state, path) {
    state.backPath = path;
  },
  SET_SHOW_NAVBAR(state, navbar) {
    state.showNavBar = navbar;
  },
  CLEAR_NAVIGATION(state) {
    state.pageTitle = null;
    state.backPath = null;
    state.showNavBar = false;
  },
};

const actions = {
  init({ commit }, { title, back, navbar }) {
    commit('CLEAR_NAVIGATION');
    commit('SET_PAGE_TITLE', title);
    if (back) {
      commit('SET_BACK_PATH', back);
    }
    if (navbar) {
      commit('SET_SHOW_NAVBAR', navbar);
    }
  },
};

const state = () => ({
  pageTitle: null,
  backPath: null,
  showNavBar: false,
});

export default {
  state,
  mutations,
  actions,
};
