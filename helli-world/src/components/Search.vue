<template>
  <div class="Search">
    <el-row>
      <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
        <div>
          <el-button class="button">查時刻車次</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
        <div>
          <el-button class="button">查車站</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
        <div>
          <el-button class="button">查票價</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
        <div>
          <el-button class="button">暫存行程</el-button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div>
          <el-button class="button">購買車票</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.button {
  padding: 40px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
