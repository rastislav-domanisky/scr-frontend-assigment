<template>
  <div class="ArticleScreen" :class="{ isNotLoaded: !isLoaded || isError }">
    <Spinner v-show="!isLoaded" />
    <div class="is404" v-show="isLoaded && isError">
        404<br>
        Can't load article
    </div>
    <div class="headingArea" v-show="isLoaded && !isError">
      <h1>{{ title }}</h1>
    </div>
    <img :src="imgUrl" :alt="title" class="img" v-show="isLoaded && !isError"/>
    <div class="text" v-show="isLoaded && !isError">
      {{ text }}
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import Article from "../models/Article";

const article = new Article();

export default {
  name: "ArticleScreen",
  components: {
    Spinner,
  },
  data() {
    return {
      isLoaded: false,
      isError: false,
      imgUrl: "",
      text: "",
      title: "",
      category: "",
    };
  },
  async created() {
    this.isLoaded = false;
    this.isError = false;
    const id = this.$route.params.id;
    const result = await article.loadArticleData(id);
    if(result === undefined || result === null) {
        this.isLoaded = true;
        this.isError = true;
        return;
    }
    this.imgUrl = result.imgUrl;
    this.text = result.text;
    this.title = result.name;
    this.category = result.category;
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
.ArticleScreen {
  background: #fff;
  width: 100%;
  min-height: calc(100vh - 60px - 100px);
  box-sizing: border-box;

  .headingArea {
    background: #fcdab7;
    width: 100%;
    box-sizing: border-box;
    min-height: 150px;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      color: #000;
      font-weight: bold;
      font-size: 1.8rem;
    }
  }

  .img {
    width: 100%;
    display: block;

    @media (min-width: 800px) {
      width: 70%;
      margin: 0 auto;
    }
  }

  .text {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 30px;
    color: #000;
    font-size: 1.2rem;

    @media (min-width: 800px) {
      width: 60%;
      margin: 0 auto;
    }
  }
}

.isNotLoaded {
  display: flex;
  align-items: center;
  justify-content: center;
}

.is404 {
    text-align: center;
    font-weight: bold;
}
</style>