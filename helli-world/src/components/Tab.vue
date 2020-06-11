<template>
  <div class="tab">
    <el-tabs type="border-card">
      <el-tab-pane label="開始">
        <Search />
      </el-tab-pane>
      <el-tab-pane label="搭乘"></el-tab-pane>
      <el-tab-pane label="搭乘結束"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Search from "./Search";

export default {
  name: "tab",
  components: {
    Search
  },
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
