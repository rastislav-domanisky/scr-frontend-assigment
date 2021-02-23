<template>
  <div
    class="LatestArticleItem"
    :style="{
      background: 'url(\'' + imgUrl + '\') 100% 250px',
    }"
  >
    <p class="category">{{ category }}</p>
    <p class="title">{{ title }}</p>
    <router-link :to="'/blog/' + id">
      <div class="readMoreBtn">Read More</div>
    </router-link>
  </div>
</template>

<script>
import Article from "../../../models/Article";

const article = new Article();

export default {
  name: "LatestArticleItem",
  props: {
    id: String,
  },
  data() {
    return {
      title: "",
      category: "",
      imgUrl: "",
    };
  },
  async created() {
    const result = await article.loadArticleData(this.id);
    this.title = result.name;
    this.category = result.category;
    this.imgUrl = result.imgUrl;
  },
};
</script>

<style lang="scss" scoped>
.LatestArticleItem {
  text-align: center;
  box-sizing: border-box;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-repeat: no-repeat;
  padding: 0 10px;

  .category {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.7rem;
    padding: 0;
  }

  .title {
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .readMoreBtn {
    box-sizing: border-box;
    width: 90px;
    height: 30px;
    font-weight: normal;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #fff solid 1px;
    cursor: pointer;
    color: #FFF;
  }

  .readMoreBtn:hover {
    background: rgba($color: #fff, $alpha: 0.25);
  }
}
</style>