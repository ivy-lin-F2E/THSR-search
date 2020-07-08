<template>
  <div class="Saved">
    <el-table :data="tableData" v-loading="loading" style="width: 100%" empty-text="暫存行程是空的">
      <el-table-column prop="TrainDate" min-width="59"></el-table-column>
      <el-table-column prop="DepTime, DepID" min-width="33">
        <template slot-scope="scope">
          {{ scope.row.DepTime }}
          <br />
          {{ scope.row.DepID }}
        </template>
      </el-table-column>
      <el-table-column prop="icon" min-width="12">
        <i class="el-icon-right"></i>
      </el-table-column>
      <el-table-column prop="ArrTime, ArrID" min-width="33">
        <template slot-scope="scope">
          {{ scope.row.ArrTime }}
          <br />
          {{ scope.row.ArrID }}
        </template>
      </el-table-column>
      <el-table-column prop="TrainNo, duration" min-width="45">
        <template slot-scope="scope">
          {{ scope.row.TrainNo }}
          <br />
          <el-tag>{{ scope.row.duration}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <el-row>
      <el-col>
        <div div class="col bg-purple">
          <!-- <el-tag>已儲存{{ num }}筆</el-tag> -->
          <el-button
            v-if="tableData.length"
            type="danger"
            icon="el-icon-delete"
            plain
            @click="clearTable()"
          >全部清除</el-button>
          <el-button type="info" plain @click="getSavedData()">刷新</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Saved",
  data() {
    return {
      loading: false,
      tableData: []
    };
  },
  mounted() {
    this.getSavedData(); // 必須重整才會有資料
  },
  computed: {
    num() {
      return this.tableData.length;
    }
  },
  methods: {
    getSavedData() {
      this.tableData = JSON.parse(localStorage.getItem("savedData"));
      // console.log("tableData", this.tableData);
      this.columnSort();
      // this.$emit("getSavedData");
    },
    columnSort() {
      const arr = this.tableData;
      if (arr.length > 0) {
        arr.sort((a, b) => {
          if (a["TrainDate"] === b["TrainDate"]) {
            return 0;
          } else if (a["TrainDate"] > b["TrainDate"]) {
            return 1;
          } else if (a["TrainDate"] < b["TrainDate"]) {
            return -1;
          }

          if (a["DepTime"] > b["DepTime"]) {
            return 1;
          } else if (a["DepTime"] < b["DepTime"]) {
            return -1;
          } else {
            return 0;
          }
        });
        // console.log("arr", arr);
      }
      return;
    },
    clearTable() {
      this.loading = true;
      localStorage.clear();
      if (localStorage.getItem("savedData") === null) {
        this.loading = false;
        this.tableData = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tag {
  height: auto;
  color: #606266;
  background-color: #f2e9e4;
  border-style: none;
}
.col {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}
.button {
  &-wrap {
    padding: 4px;
  }
  min-width: 100%;
  padding: 30px 0;
}
</style>
