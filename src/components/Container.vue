<template>
  <div class="container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default {
  name: "container",
  components: {
    Header,
    Main,
    Footer
  },
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & > * {
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: #fff;
  }
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  letter-spacing: 4px;
  background-color: #e38f24;
  color: #eef4ed;
}
.main {
  width: 100%;
  flex: 1;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b2545;
  color: #eef4ed;
}
</style>
