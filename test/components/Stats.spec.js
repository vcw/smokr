import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import vueBemCn from 'vue-bem-cn';
import vueSax from 'vuesax';

import Stats from '~/components/Stats.vue';
import DayStats from '~/components/DayStats.vue';
import fakeStore from '~/mocks/fakeStore';

const localVue = createLocalVue();
localVue.use(vueBemCn);
localVue.use(Vuex);
localVue.use(vueSax);

describe('Components LastSmoking', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(fakeStore);
    wrapper = mount(Stats, { localVue, store });
  });

  it('Does not render if store has no smokings', () => {
    expect(wrapper.html()).toBeFalsy();
  });

  it('Renders if store has smokings', async () => {
    await wrapper.vm.$store.dispatch('doSmokeV2', new Date());
    expect(wrapper.html()).toBeTruthy();
  });

  it('Variable dailyMax correctly computed as 0 when there are no smokings in the store', () => {
    expect(wrapper.vm.dailyMax).toBe(0);
  });

  it('Does not render any DayStats components when there are no smokings in the store', () => {
    expect(wrapper.findAllComponents(DayStats).length).toBeFalsy();
  });

  it('Renders DayStats components when there are smokings in the store', async () => {
    await wrapper.vm.$store.dispatch('doSmokeV2', new Date());
    expect(wrapper.findAllComponents(DayStats).length).toBeTruthy();
  });
});
