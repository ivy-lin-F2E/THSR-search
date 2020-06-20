<template>
  <div class="timetable">
    <el-table
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: '!startTime', order: 'descending'}"
    >
      <el-table-column prop="TrainNo" label="車次" sortable min-width="30"></el-table-column>
      <el-table-column prop="DepTime" label="出發時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="ArrTime" label="到達時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="total" label="行車時間" sortable min-width="50"></el-table-column>
    </el-table>
    <el-row>
      <el-col :xs="12" :md="12">
        <!-- 一定要給至少2種尺寸 -->
        <div class="col bg-purple-light">
          <el-button type="info" icon="el-icon-collection-tag">暫存</el-button>
        </div>
      </el-col>
      <el-col :xs="12" :md="12">
        <div class="col bg-purple">
          <el-button type="primary" icon="el-icon-bank-card">購票</el-button>
        </div>
      </el-col>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ filterForm }}</span>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "timetable",
  props: {
    filterForm: Object
  },
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    // console.log(this.filterForm);
    this.tableData = [];
  },
  computed: {},
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val);
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
