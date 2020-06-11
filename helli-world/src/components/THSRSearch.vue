<template>
  <div class="thsr-search">
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
  name: "thsr-search",
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
.thsr-search {
  min-height: 100vh;
}
</style>
