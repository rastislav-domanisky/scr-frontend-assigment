<template>
  <div class="NavItems">
    <router-link v-for="item in links" :key="item" :to="'/' + item">
      <div class="navItem">
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
};
</script>

<style lang="scss" scoped>
.NavItems {
  box-sizing: border-box;
  height: 100%;
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5%;

  @media (max-width: 600px) {
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

    .navItem {
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