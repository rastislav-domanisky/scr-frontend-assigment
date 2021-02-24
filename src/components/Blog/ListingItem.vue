<template>
  <div class="ListingItem">
    <img :src="imgUrl" :alt="title" class="img" />
    <p class="category">{{ category }}</p>
    <h3 class="heading">{{ title }}</h3>
    <div class="divider" />
    <div class="text">{{ text.substring(0, 220) + "..." }}</div>
    <router-link :to="'/blog/'+id">
      <p class="btn">Read More</p>
    </router-link>
  </div>
</template>

<script>
import Article from "../../models/Article";

const article = new Article();

export default {
  name: "Listingitem",
  props: {
    id: String,
  },
  data() {
    return {
      title: "",
      category: "",
      imgUrl: "",
      text: "",
    };
  },
  async created() {
    const result = await article.loadArticleData(this.id);
    this.title = result.name;
    this.category = result.category;
    this.imgUrl = result.imgUrl;
    this.text = result.text;
  },
};
</script>

<style lang="scss" scoped>
.ListingItem {
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background: #fff;
  //margin: 20px 20px;

  @media (min-width: 800px) {
    display: inline-block;
    margin: 0 1.5%;
    width: 30%;
  }

  .img {
    width: 100%;
  }

  .category {
    margin: 15px 0;
    font-weight: 300;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .heading {
    font-weight: bold;
    box-sizing: border-box;
    font-size: 1.3rem;
    padding: 0;
    margin: 10px 20px;
  }

  .divider {
    box-sizing: border-box;
    width: 40%;
    height: 1px;
    background: rgba($color: #000000, $alpha: 0.7);
    margin: 30px auto;
  }

  .text {
    box-sizing: border-box;
    width: 100%;
    font-weight: normal;
    font-size: 1rem;
    text-align: center;
    padding: 10px 20px;
    color: rgba($color: #000000, $alpha: 0.8);
  }

  a {
    text-decoration: none;
  }

  .btn {
    color: rgba($color: #000000, $alpha: 0.8);
    font-weight: bold;
    margin-bottom: 60px;
  }
}
</style>