import Vue from "vue";
import Vuex from "vuex";
import algorithmService from "../algorithms";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    action: "encrypt",

    algorithms: [],

    mode: "text",

    selectedAlgorithm: {
      name: 0,
      type: 0
    },

    results: {
      data: [],
      completed: 0
    }
  },

  mutations: {
    UPDATE_ALGORITHMS(state, payload) {
      state.algorithms = payload;
    },

    UPDATE_ALGORITHM_NAME(state, name) {
      state.selectedAlgorithm.name = name;
      state.selectedAlgorithm.type = 0;
    },

    UPDATE_ALGORITHM_TYPE(state, type) {
      state.selectedAlgorithm.type = type;
    },

    UPDATE_ACTION(state) {
      state.action === "encrypt"
        ? (state.action = "decrypt")
        : (state.action = "encrypt");
    },

    UPDATE_MODE(state) {
      state.mode === "text" ? (state.mode = "files") : (state.mode = "text");
    }
  },

  actions: {
    toogle_action({ commit }) {
      commit("UPDATE_ACTION");
    },

    toogle_mode({ commit }) {
      commit("UPDATE_MODE");
    },

    async retrive_algorithms({ commit }) {
      const algorithms = await algorithmService();
      commit("UPDATE_ALGORITHMS", algorithms);
    }
  },

  modules: {}
});
