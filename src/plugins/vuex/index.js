import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import keys from './keys';

Vue.use(Vuex);
const state = {
  windowSize: {}
};
const mutations = {
  [keys.SET_WINDOW_SIZE] (state, windowSize) {
    state.windowSize = windowSize;
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
