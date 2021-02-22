<template>
  <Navigation :links="['home', 'blog', 'contact']" />
  <main class="mainArea">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from './components/Footer';

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  .mainArea {
    background: #fff;
    width: 100%;
    min-height: calc(100vh - 60px - 100px);
    box-sizing: border-box;
  }
}
</style>
