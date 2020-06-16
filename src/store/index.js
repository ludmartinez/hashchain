import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedAlgorithm: {
      name: 0,
      type: 0
    }
  },

  mutations: {
    UPDATE_ALGORITHM_NAME(state, name) {
      state.selectedAlgorithm.name = name;
      state.selectedAlgorithm.type = 0;
    },

    UPDATE_ALGORITHM_TYPE(state, type) {
      state.selectedAlgorithm.type = type;
    }
  },

  actions: {},

  modules: {}
});
