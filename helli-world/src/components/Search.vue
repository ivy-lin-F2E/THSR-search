<template>
  <div class="search">
    <Timetable />
    <el-row>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawertime = true">查時刻車次</el-button>
          <el-drawer
            title="查時刻車次"
            :visible.sync="drawertime"
            direction="rtl"
            size="100%"
            style="margin-top: 60px"
          >
            <el-table
              :data="tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              :default-sort="{prop: '!startTime', order: 'descending'}"
            >
              <el-table-column prop="train" label="車次" sortable min-width="30"></el-table-column>
              <el-table-column prop="startTime" label="出發時間" sortable min-width="50"></el-table-column>
              <el-table-column prop="endTime" label="到達時間" sortable min-width="50"></el-table-column>
              <el-table-column prop="total" label="行車時間" sortable min-width="50"></el-table-column>
            </el-table>
          </el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerstation = true">查車站</el-button>
          <el-drawer
            title="查車站"
            :visible.sync="drawerstation"
            direction="rtl"
            size="100%"
            style="margin-top: 60px"
          ></el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerfare = true">查票價</el-button>
          <el-drawer
            title="查票價"
            :visible.sync="drawerfare"
            direction="rtl"
            size="100%"
            style="margin-top: 60px"
          ></el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawersaved = true">暫存行程</el-button>
          <el-drawer
            title="暫存行程"
            :visible.sync="drawersaved"
            direction="rtl"
            size="100%"
            style="margin-top: 60px"
          ></el-drawer>
        </div>
      </el-col>
      <el-col :xs="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerticketing = true">購買車票</el-button>
          <el-drawer
            title="購買車票"
            :visible.sync="drawerticketing"
            direction="rtl"
            size="100%"
            style="margin-top: 60px"
          ></el-drawer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Timetable from "./Timetable";

export default {
  name: "Search",
  components: {
    Timetable
  },
  data() {
    return {
      drawertime: false,
      drawerstation: false,
      drawerfare: false,
      drawersaved: false,
      drawerticketing: false,
      tableData: [
        {
          train: "803",
          startTime: "06:26",
          endTime: "08:40",
          total: "2:14"
        },
        {
          train: "203",
          startTime: "06:30",
          endTime: "08:15",
          total: "1:45"
        },
        {
          train: "603",
          startTime: "06:51",
          endTime: "08:50",
          total: "1:59"
        },
        {
          train: "805",
          startTime: "07:11",
          endTime: "09:25",
          total: "2:14"
        },
        {
          train: "109",
          startTime: "07:31",
          endTime: "09:05",
          total: "1:34"
        }
      ]
    };
  },
  mounted() {},
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
.button {
  &-wrap {
    padding: 4px;
  }
  min-width: 100%;
  padding: 30px 0;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
