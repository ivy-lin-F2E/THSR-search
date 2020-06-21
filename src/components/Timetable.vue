<template>
  <div class="timetable">
    <el-table
      :data="filterData"
      :savedData="savedData"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: '!DepTime', order: 'descending'}"
    >
      <el-table-column prop="TrainNo" label="車次" sortable min-width="30"></el-table-column>
      <el-table-column prop="DepTime" label="出發時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="ArrTime" label="到達時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="total" label="行車時間" sortable min-width="50"></el-table-column>
    </el-table>
    <el-row>
      <el-col :xs="12" :md="12">
        <div class="col bg-purple-light">
          <el-button
            type="info"
            icon="el-icon-collection-tag"
            :plain="true"
            @click="handleSave"
            :disabled="isDisabled"
          >暫存</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="12">
        <div class="col bg-purple">
          <el-button type="primary" icon="el-icon-bank-card" disabled>購票</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "timetable",
  props: {
    filterData: Array,
    savedData: Array
  },
  data() {
    return {
      isDisabled: true
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log(val);
      return (this.isDisabled = false);
    },
    handleSave() {
      this.update();
      // 1# 接收handleCurrentChange的val
      // 2# 抓取父層Search.vue的savedData((或是在handleSubmit的時候props進來??))
      // 3# 把1#的結果與savedData取聯集
      // 參考https://bonze.tw/javascript-array-intersection-difference-set/
      // 4# 把3#的結果按照DepTime排序((ref. result.sort(function(a, b){...} ))
      // 5# 把4#傳給父層Search.vue
      // 6# 清空filterData和父層Search.vue el-form-item的值
      this.closeDrawertime();
      // 7# 出現Message消息提示「儲存成功，3秒後自動跳轉回首頁」
      // 8# setTimeout，3秒後自動關閉drawer → @click="drawertime = false"
      // 參考https://blog.csdn.net/u011280778/article/details/100589317
    },
    update() {},
    closeDrawertime() {
      this.$message({
        message: "儲存成功，3秒後自動跳轉回首頁",
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}
</style>
