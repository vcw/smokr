import userData from '~/store/userData';
import processSmokings from '~/utils/processSmokings';

let smokings = [new Date()];

export default {
  modules: {
    userData: {
      ...userData,
      actions: {
        getSmokesV2({ commit }) {
          try {
            const sortedSmokings = smokings.sort((a, b) => ((a < b) ? 1 : -1));
            const processedSmokings = processSmokings(sortedSmokings);
            commit('SET_SMOKES_V2', processedSmokings);
          } catch (error) {
            console.log(error);
          }
        },
        doSmokeV2({ dispatch }, timestamp) {
          let notification;

          try {
            smokings.push(timestamp);
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

          return { notification };
        },
        removeSmoke() {},
        clearSmokings({ dispatch }) {
          smokings = [];
          dispatch('GET_SMOKES_V2');
        },
      },
    },
  },
};
