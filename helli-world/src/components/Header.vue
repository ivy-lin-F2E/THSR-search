<template>
  <div>
    <el-header class="header">
      高鐵購GO!
      <i class="el-icon-more"></i>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "header",
  components: {},
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e38f24;
  font-size: 20px;
  letter-spacing: 4px;
  color: #eef4ed;
}
.el-icon-more {
  padding: 8px 6px;
  cursor: pointer;
}
</style>
