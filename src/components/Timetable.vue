<template>
  <div class="timetable">
    <el-table
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: '!startTime', order: 'descending'}"
    >
      <el-table-column prop="trainNo" label="車次" sortable min-width="30"></el-table-column>
      <el-table-column prop="startTime" label="出發時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="endTime" label="到達時間" sortable min-width="50"></el-table-column>
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
      <!-- <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ ruleForm }}</span>
        </div>
      </el-card>-->
    </el-row>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "timetable",
  props: {
    ruleForm: Object
  },
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    // console.log(this.ruleForm);
    // this.fetchAPI();
    this.tableData = [
      {
        trainNo: "0803",
        startTime: "06:15",
        endTime: "07:30",
        total: "01:15"
      },
      {
        trainNo: "0603",
        startTime: "06:40",
        endTime: "07:51",
        total: "01:11"
      },
      {
        trainNo: "0805",
        startTime: "07:00",
        endTime: "08:15",
        total: "01:15"
      },
      {
        trainNo: "0109",
        startTime: "07:20",
        endTime: "08:18",
        total: "00:58"
      },
      {
        trainNo: "1505",
        startTime: "07:25",
        endTime: "08:42",
        total: "01:17"
      }
    ];
  },
  computed: {},
  methods: {
    // fetchAPI() {
    //   this.getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date);
    // },
    // getData(from, to, date) {
    //   axios({
    //     methods: "GET",
    //     url: `https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/${from}/to/${to}/${date}?$top=5&$format=JSON`
    //   }).then(res => {
    //     console.log(res.data);
    //   });
    // },
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
