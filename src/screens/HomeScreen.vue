<template>
  <div class="HomeScreen">
    <LatestArticles />
  </div>
</template>

<script>
import LatestArticles from "../components/Home/LatestArticles";

export default {
  name: "HomeScreen",
  components: {
    LatestArticles,
  },
};
</script>

<style lang="scss" scoped>
.HomeScreen {
  background: #fff;
  width: 100%;
  min-height: calc(100vh - 60px - 100px);
  box-sizing: border-box;
}
</style>