import firebase from 'firebase';

function groupSmokes(smokes) {
  return smokes.reduce((accumulator, smoke) => {
    const date = smoke.toLocaleDateString('ru-RU');
    const recordIndex = accumulator.findIndex((record) => record.date === date);

    if (recordIndex !== -1) {
      accumulator[recordIndex].data.push(smoke);
    } else {
      accumulator.push({
        date,
        data: [smoke],
      });
    }
    return accumulator;
  }, []);
}

const mutations = {
  SET_SMOKES(state, smokes) {
    state.smokes = smokes;
    state.lastSmoke = (smokes) ? smokes[0] : null;
  },
  SET_SMOKES_V2(state, smokes) {
    state.smokesV2 = smokes;
    state.lastSmoke = (smokes) ? smokes[0].data[0] : null;
    state.dailyMax = Math.max(...smokes.map((smoke) => smoke.data.length));
  },
  CLEAR_USER_DATA_V2(state) {
    state.smokesV2 = null;
    state.lastSmoke = null;
    state.dailyMax = null;
  },
  CLEANUP_SMOKES(state) {
    state.smokes = null;
  },
  SET_STATS(state, stats) {
    state.stats = stats;
  },
  CLEAR_STATS(state) {
    state.stats = null;
  },
  CLEAR_USER_DATA(state) {
    state.smokes = null;
    state.lastSmoke = null;
    state.stats = null;
  },
};

const actions = {
  async getSmokes({ commit, rootState }) {
    const collection = await this.$fireStore.collection('users').doc(rootState.auth.user.uid).collection('smokes');
    const smokes = await collection.orderBy('timestamp', 'desc').get();

    const processedSmokes = [];
    if (smokes) {
      smokes.forEach((smoke) => processedSmokes.push(smoke.data().timestamp.toDate()));
    }

    commit('SET_SMOKES', processedSmokes);
  },

  async getSmokesV2({ commit, rootState }) {
    try {
      const userDoc = await this.$fireStore.collection('users').doc(rootState.auth.user.uid).get();
      const userData = await userDoc.data();
      const smokes = userData.smokes
        .map((smoke) => smoke.toDate())
        .sort((a, b) => ((a < b) ? 1 : -1));

      const groupedSmokes = groupSmokes(smokes);

      commit('SET_SMOKES_V2', groupedSmokes);
    } catch (error) {
      console.log(error);
    }
  },

  async doSmokeV2({ dispatch, rootState }, timestamp) {
    try {
      const userDoc = await this.$fireStore.collection('users').doc(rootState.auth.user.uid);
      await userDoc.set({
        smokes: firebase.firestore.FieldValue.arrayUnion(timestamp),
      }, {
        merge: true,
      });
      dispatch('getSmokesV2');
    } catch (error) {
      dispatch('notifications/showNotification', {
        title: 'Произошла ошибка!',
        text: 'Нам очень жаль',
      }, { root: true });
      console.log(error);
    }
  },
};

const state = () => ({
  smokes: null,
  smokesV2: null,
  lastSmoke: null,
  dailyMax: null,
});

export default {
  state,
  mutations,
  actions,
};
