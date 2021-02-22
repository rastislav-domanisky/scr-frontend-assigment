import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpened: false,
    articles: [],
  },
  mutations: {
    toggleMenuState(state) {
      state.isMenuOpened = !state.isMenuOpened;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getMenuState: state => state.isMenuOpened,
  },
});
