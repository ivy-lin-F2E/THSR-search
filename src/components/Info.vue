<template>
  <div class="info">
    <el-row>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>查快捷公車</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>查轉乘資訊</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>查搭乘記錄</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>申請乘車證明</el-button>
        </div>
      </el-col>
      <el-col :xs="24">
        <div class="button-wrap">
          <el-button class="button" disabled>設定常用行程</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Info",
  components: {},
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.button {
  &-wrap {
    padding: 4px;
  }
  min-width: 100%;
  padding: 30px 0;
}
</style>
