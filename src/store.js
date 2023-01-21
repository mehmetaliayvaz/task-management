import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sections: [],
  },
  mutations: {
    setSections(state, payload) {
      state.sections = payload;
    },
  },
  actions: {
    setLocalStorageSections({ state, commit }, payload) {
      localStorage.setItem("sections", JSON.stringify(payload));
      commit("setSections", payload);
      console.log(state.sections);
    },
    getLocalStorageSections({ commit }) {
      if (localStorage.getItem("sections")) {
        commit("setSections", JSON.parse(localStorage.getItem("sections")));
      } else {
        commit("setSections", []);
      }
    },
  },
  getters: {
    getSections(state) {
      return state.sections;
    },
  },
});

export default store;
