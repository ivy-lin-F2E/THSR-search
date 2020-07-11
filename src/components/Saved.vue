<template>
  <div class="Saved">
    <el-table :data="tableData" v-loading="loading" style="width: 100%" empty-text="暫存行程是空的">
      <el-table-column prop="trainDate" min-width="59"></el-table-column>
      <el-table-column prop="depTime, depStation" min-width="33">
        <template slot-scope="scope">
          {{ scope.row.depTime }}
          <br />
          {{ scope.row.depStation }}
        </template>
      </el-table-column>
      <el-table-column prop="icon" min-width="12">
        <i class="el-icon-right"></i>
      </el-table-column>
      <el-table-column prop="arrTime, arrStation" min-width="33">
        <template slot-scope="scope">
          {{ scope.row.arrTime }}
          <br />
          {{ scope.row.arrStation }}
        </template>
      </el-table-column>
      <el-table-column prop="trainNo, duration" min-width="45">
        <template slot-scope="scope">
          {{ scope.row.trainNo }}
          <br />
          <el-tag>{{ scope.row.duration}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column min-width="30">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, tableData)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <el-row>
      <el-col>
        <div div class="col bg-purple">
          <el-button v-if="tableData.length" icon="el-icon-delete" plain @click="clearTable()">全部清除</el-button>
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
    this.getSavedData();
  },
  methods: {
    getSavedData() {
      this.tableData = JSON.parse(localStorage.getItem("savedData")) || [];
      this.columnSort();
    },
    columnSort() {
      const arr = this.tableData;
      if (arr.length > 0) {
        arr.sort((a, b) => {
          if (a["trainDate"] === b["trainDate"]) {
            return 0;
          } else if (a["trainDate"] > b["trainDate"]) {
            return 1;
          } else if (a["trainDate"] < b["trainDate"]) {
            return -1;
          }

          if (a["depTime"] > b["depTime"]) {
            return 1;
          } else if (a["depTime"] < b["depTime"]) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      return;
    },
    handleDelete(index, row) {
      row.splice(index, 1);
      this.handleDeleteStorage();
    },
    handleDeleteStorage() {
      localStorage.setItem("savedData", JSON.stringify(this.tableData));
      this.$emit("close");
    },
    clearTable() {
      this.loading = true;
      setTimeout(() => {
        localStorage.clear();
        if (localStorage.getItem("savedData") === null) {
          this.loading = false;
          this.tableData = [];
        }
      }, 1000);
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