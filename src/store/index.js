import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpened: false,
    articles: [
      {
        title: "Article Name",
        category: "LIFESTYLE",
        imgURL: "",
        text: "fdsjksdfps,dfs dkfsúpf úsdfp dsfldäsl äňs.df.daä.l sfd,s"
      }
    ],
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
