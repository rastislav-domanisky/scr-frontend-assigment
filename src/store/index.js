import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpened: false,
    articles: [],
  },
  mutations: {
    toggleMenuState(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
    closeMenu(state) {
      state.isMenuOpened = false;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getMenuState: state => state.isMenuOpened,
  },
});
