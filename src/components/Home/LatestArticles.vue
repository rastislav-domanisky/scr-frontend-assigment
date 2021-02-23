<template>
  <div class="LatestArticles" :class="{notLoaded: !isLoaded}">
    <Spinner v-show="!isLoaded" />
    <LatestArticleItem
      v-show="isLoaded"
      v-for="(item, index) in articleIds.slice(0, 4)"
      :key="index"
      :id="item"
    />
  </div>
</template>

<script>
import Spinner from "../Spinner";
import LatestArticleItem from "./LatestArticles/LatestArticleItem";
import { mapGetters } from "vuex";

export default {
  name: "LatestArticles",
  components: {
    Spinner,
    LatestArticleItem,
  },
  computed: {
    ...mapGetters({
      articleIds: "getLoadedArticleIds",
      isLoaded: "getLoadedState",
    }),
  },
  created() {
    this.$store.dispatch("getArticleIds");
  },
};
</script>

<style lang="scss" scoped>
.LatestArticles {
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2.5px;
  grid-row-gap: 2.5px;

  @media (max-width: 700px) {
    height: 500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

.notLoaded {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>