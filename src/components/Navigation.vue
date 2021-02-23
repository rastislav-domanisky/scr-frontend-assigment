<template>
  <nav>
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bars"
      class="menuBtn"
      @click="toggleMenu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
    <router-link :to="'/'">
      <img :src="logoImg" alt="Logo" class="logo" />
    </router-link>
    <NavItems :links="links" />
    <NavItemsMobile :links="links" v-show="isMenuOpened" />
  </nav>
</template>

<script>
import LogoImg from "../assets/logo.png";
import NavItems from "./Navigation/NavItems";
import NavItemsMobile from "./Navigation/NavItemsMobile";
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  components: {
    NavItems,
    NavItemsMobile,
  },
  props: {
    links: Array,
  },
  computed: {
    ...mapGetters({ isMenuOpened: "getMenuState" }),
  },
  data() {
    return {
      logoImg: LogoImg,
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenuState");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  box-sizing: border-box;
  margin: 0 2%;
}

nav {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background: #fff;

  .menuBtn {
    width: 40px;
    height: 40px;
    margin: 0 3%;
    color: #000;

    @media (min-width: 600px) {
      display: none;
    }
  }
}
</style>