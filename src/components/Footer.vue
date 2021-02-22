<template>
  <footer>
      <div class="divider" />
      <p>Copyright © {{ new Date().getFullYear() }} Blog.<br />All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style lang="scss" scoped>
Footer {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px;
    text-align: center;
    line-height: 25px;

    .divider {
        width: 90%;
        height: 1px;
        background: #000;
        margin: 0 auto;
        box-sizing: border-box;
    }
}
</style>