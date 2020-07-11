<template>
  <div class="tab">
    <el-tabs type="border-card">
      <el-tab-pane label="開始">
        <Search />
      </el-tab-pane>
      <el-tab-pane label="搭乘">
        <Clearance />
      </el-tab-pane>
      <el-tab-pane label="搭乘結束">
        <Info />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Search from "./Search";
import Clearance from "./Clearance";
import Info from "./Info";

export default {
  name: "tab",
  components: {
    Search,
    Clearance,
    Info
  }
};
</script>

<style lang="scss" scoped>
</style>