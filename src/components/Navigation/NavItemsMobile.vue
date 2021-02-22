<template>
  <div class="NavItemsMobile">
    <router-link v-for="item in links" :key="item" :to="'/' + item" @click="closeDropdownMenu">
      <div class="navItemMobile">
        {{ item }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavItems",
  props: {
    links: Array,
  },
  methods: {
    closeDropdownMenu() {
      this.$store.commit("closeMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.NavItemsMobile {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 60px;
  z-index: 10;
  background: #FFF;

  @media (min-width: 600px) {
      display: none;
  }

  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: normal;
    :hover {
        text-decoration: underline;
    }

    .navItemMobile {
      box-sizing: border-box;
      height: 40px;
      background: #FFF;
      padding: 0 10px;
      margin: 5px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>