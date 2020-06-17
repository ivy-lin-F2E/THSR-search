<template>
  <div class="clearance">
    <el-row>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>取票</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>傳送取票序號</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>乘車驗票</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" disabled>設定到站提醒</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Clearance",
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
