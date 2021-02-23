<template>
  <div class="BlogScreen" :class="{isNotLoaded: !isLoaded}">
    <Spinner v-show="!isLoaded" />
    <ListingItem
      v-show="isLoaded"
      v-for="(item, index) in articleIds"
      :key="index"
      :id="item"
    />
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import ListingItem from "../components/Blog/ListingItem";
import { mapGetters } from "vuex";

export default {
  name: "BlogScreen",
  components: {
    Spinner,
    ListingItem,
  },
  computed: {
    ...mapGetters({
      articleIds: "getLoadedArticleIds",
      isLoaded: "getLoadedState",
    }),
  },
  beforeCreate() {
    this.$store.commit("clearArticleIds");
  },
  created() {
    this.$store.dispatch("getArticleIds");
  },
};
</script>

<style lang="scss" scoped>
.BlogScreen {
  background: #fff;
  width: 100%;
  min-height: calc(100vh - 60px - 100px);
  box-sizing: border-box;
  display: block;

  @media (min-width: 800px) {
    margin: 0 auto;
    width: 70%;
    margin-top: 50px;
  }
}

.isNotLoaded {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>