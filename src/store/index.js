import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    billingValue: 5,
  },
  getters: {
    getbillingValue: (state) => state.billingValue,
  },
  mutations: {
    setBillingValue(state, payload) {
      state.billingValue = payload;
    },
  },
  actions: {
    async setBilling(state) {
      const billingvalue = await fetch('http://127.0.0.1:8000/api/settings', {
        Accept: 'application/json',
      });
      const b = await billingvalue.json();

      state.commit('setBillingValue', b.billingtype);
    },
  },
  modules: {},
});
