<template>
  <div class="app">
    <Container />
  </div>
</template>

<script>
import Container from "./components/Container";

export default {
  name: "App",
  components: {
    Container
  }
};
</script>

<style lang="scss">
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
}
</style>
