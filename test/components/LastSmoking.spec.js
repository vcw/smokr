import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import vueBemCn from 'vue-bem-cn';

import LastSmoking from '~/components/LastSmoking.vue';

import fakeStore from '~/mocks/fakeStore';

const localVue = createLocalVue();
localVue.use(vueBemCn);
localVue.use(Vuex);

describe('Components LastSmoking', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(fakeStore);
    wrapper = mount(LastSmoking, { localVue, store });
  });

  it('Does not render if store has no smokings', () => {
    expect(wrapper.vm.$el.innerHTML).toBeFalsy();
  });

  it('Renders if store has smokes', async () => {
    await wrapper.vm.$store.dispatch('doSmokeV2', new Date());
    expect(wrapper.html()).toBeTruthy();
  });

  it('Does not compute date and time if no last smoking is in the store', () => {
    expect(wrapper.vm.date).toBe(null);
  });

  it('Computes date and time if last smokin is in the store', async () => {
    await wrapper.vm.$store.dispatch('doSmokeV2', new Date());
    expect(wrapper.vm.date).toBeTruthy();
  });
});
