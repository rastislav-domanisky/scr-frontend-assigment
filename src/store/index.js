import { createStore } from "vuex";

import Article from '../models/Article';

const article = new Article();

export default createStore({
  state: {
    isMenuOpened: false,
    isLoaded: false,
    articleIds: [],
  },
  mutations: {
    toggleMenuState(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
    closeMenu(state) {
      state.isMenuOpened = false;
    },
    setLoadedState(state, payload) {
      state.isLoaded = payload;
    },
  },
  actions: {
    getArticleIds: async (context) => {
      context.commit("setLoadedState", false);
      context.state.articleIds = [];
      context.state.articleIds = await article.loadArticleIds();
      context.commit("setLoadedState", true);
    }
  },
  modules: {},
  getters: {
    getMenuState: state => state.isMenuOpened,
    getLoadedState: state => state.isLoaded,
    getLoadedArticleIds: state => state.articleIds,
  },
});
