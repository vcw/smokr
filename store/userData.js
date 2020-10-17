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
  SET_SMOKES_V2(state, smokes) {
    state.smokesV2 = smokes;
    state.lastSmoke = (smokes.length) ? smokes[0].data[0] : null;
    state.dailyMax = Math.max(...smokes.map((smoke) => smoke.data.length));
  },
  CLEAR_USER_DATA_V2(state) {
    state.smokesV2 = null;
    state.lastSmoke = null;
    state.dailyMax = null;
  },
};

const actions = {
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
    let notification = {};
    try {
      const userDoc = await this.$fireStore.collection('users').doc(rootState.auth.user.uid);
      await userDoc.set({
        smokes: this.$fireStoreObj.FieldValue.arrayUnion(timestamp),
      }, {
        merge: true,
      });
      dispatch('getSmokesV2');
      notification = {
        title: 'Свершилось курение!',
        text: 'Здоровью нанесён непоправимый урон :(',
      };
    } catch (error) {
      notification = {
        title: 'Произошла ошибка!',
        text: 'Нам очень жаль',
      };
      console.log(error);
    }

    return {
      notification,
    };
  },

  async removeSmoke({ dispatch, rootState }, timestamp) {
    let notification = {};
    try {
      const userDoc = await this.$fireStore.collection('users').doc(rootState.auth.user.uid);
      await userDoc.update({
        smokes: this.$fireStoreObj.FieldValue.arrayRemove(timestamp),
      });
      dispatch('getSmokesV2');
      notification = {
        title: 'Курение удалено',
        text: 'Произносим прощальные слова...',
      };
    } catch (error) {
      notification = {
        title: 'Произошла ошибка',
        text: 'Скорее всего, курение осталось на своём месте...',
      };
      console.log(error);
    }

    return {
      notification,
    };
  },
};

const state = () => ({
  smokesV2: null,
  lastSmoke: null,
  dailyMax: null,
});

export default {
  state,
  mutations,
  actions,
};
