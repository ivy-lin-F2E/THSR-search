<template>
  <div class="timetable">
    <el-table
      :data="filterData"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: 'depTime'}"
    >
      <el-table-column prop="trainNo" label="車次" sortable min-width="30"></el-table-column>
      <el-table-column prop="depTime" label="出發時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="arrTime" label="到達時間" sortable min-width="50"></el-table-column>
      <el-table-column prop="duration" label="行車時間" sortable min-width="50"></el-table-column>
    </el-table>
    <el-row>
      <el-col :xs="12" :md="12">
        <div class="col bg-purple-light">
          <el-button
            type="info"
            icon="el-icon-collection-tag"
            :plain="true"
            @click="handleSave"
            :disabled="disabledSaveButton"
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
    filterData: Array
  },
  data() {
    return {
      currentRow: {},
      storageArray: []
    };
  },
  computed: {
    disabledSaveButton() {
      return !Object.values(this.currentRow).length;
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSave() {
      this.closeDrawerTime();
      if (localStorage.getItem("savedData") === null) {
        this.storageArray = [this.currentRow];
        localStorage.setItem("savedData", JSON.stringify(this.storageArray));
      } else {
        this.storageArray = JSON.parse(localStorage.getItem("savedData"));
        this.checkExist();
      }
    },
    checkExist() {
      let result = this.storageArray.filter(item => {
        return (
          item.trainDate === this.currentRow.trainDate &&
          item.trainDepID === this.currentRow.trainDepID &&
          item.trainArrID === this.currentRow.trainIDArr &&
          item.trainNo === this.currentRow.trainNo
        );
      });
      if (result.length === 0) {
        this.update();
      }
      return;
    },
    update() {
      this.storageArray.push(this.currentRow);
      localStorage.setItem("savedData", JSON.stringify(this.storageArray));
    },
    closeDrawerTime() {
      this.$message({
        message: "儲存成功，3秒後自動跳轉回首頁",
        type: "success"
      });
      this.$emit("close");
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
