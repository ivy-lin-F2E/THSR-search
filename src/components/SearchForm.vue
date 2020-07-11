<template>
  <div class="searchform">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :data="filterData">
      <el-row>
        <el-col :xs="24" :sm="10" :md="5">
          <div>
            <el-form-item prop="from" required class="col bg-purple">
              <el-select v-model="ruleForm.from" placeholder="出發站">
                <el-option label="南港" value="0990"></el-option>
                <el-option label="台北" value="1000"></el-option>
                <el-option label="板橋" value="1010"></el-option>
                <el-option label="桃園" value="1020"></el-option>
                <el-option label="新竹" value="1030"></el-option>
                <el-option label="苗栗" value="1035"></el-option>
                <el-option label="台中" value="1040"></el-option>
                <el-option label="彰化" value="1043"></el-option>
                <el-option label="雲林" value="1047"></el-option>
                <el-option label="嘉義" value="1050"></el-option>
                <el-option label="台南" value="1060"></el-option>
                <el-option label="左營" value="1070"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="5">
          <div class="col bg-purple">
            <el-form-item prop="to" required>
              <el-select v-model="ruleForm.to" placeholder="到達站">
                <el-option label="南港" value="0990"></el-option>
                <el-option label="台北" value="1000"></el-option>
                <el-option label="板橋" value="1010"></el-option>
                <el-option label="桃園" value="1020"></el-option>
                <el-option label="新竹" value="1030"></el-option>
                <el-option label="苗栗" value="1035"></el-option>
                <el-option label="台中" value="1040"></el-option>
                <el-option label="彰化" value="1043"></el-option>
                <el-option label="雲林" value="1047"></el-option>
                <el-option label="嘉義" value="1050"></el-option>
                <el-option label="台南" value="1060"></el-option>
                <el-option label="左營" value="1070"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="4" :md="2">
          <div class="col bg-purple-light">
            <el-button type="primary" @click="changeFromTo" icon="el-icon-refresh"></el-button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="5">
          <div class="col bg-purple">
            <el-form-item prop="time">
              <el-time-picker
                placeholder="出發時間"
                v-model="ruleForm.time"
                :picker-options="{selectableRange: '06:00:00 - 23:59:59'}"
                value-format="HH:mm"
                @change="setTimeFormat"
              ></el-time-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="5">
          <div class="col bg-purple-light">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="出發日期"
                v-model="ruleForm.date"
                value-format="yyyy-MM-dd"
                @change="setDateFormat"
              ></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :xs="24" :sm="4" :md="2">
          <div class="col bg-purple">
            <el-button type="primary" @click="handleSubmit" icon="el-icon-search"></el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <br v-if="loading" />
    <el-row v-loading="loading"></el-row>
    <Timetable
      v-if="filterData.length"
      :filterData="filterData"
      @click="handleSubmit"
      @close="resetForm('ruleForm')"
    />
  </div>
</template>

<script>
import Timetable from "./Timetable";
import { getData } from "@/api/thsr";

export default {
  name: "SearchForm",
  components: {
    Timetable
  },
  mounted() {},
  data() {
    return {
      ruleForm: {
        from: "",
        to: "",
        time: "",
        date: ""
      },
      rules: {
        from: [{ required: true, message: " ", trigger: "change" }],
        to: [{ required: true, message: " ", trigger: "change" }],
        date: [{ required: true, message: " " }]
      },
      loading: false,
      filterData: []
    };
  },
  methods: {
    // handleChange(xxx)當選項ruleForm.from === ruleForm.to時return false
    changeFromTo() {
      const resFrom = this.ruleForm.to;
      const resTo = this.ruleForm.from;
      this.ruleForm.from = resFrom;
      this.ruleForm.to = resTo;
    },
    setTimeFormat(val) {
      this.ruleForm.time = val;
    },
    handleSubmit() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          this.fetchData();
        } else {
          return false;
        }
      });
    },
    setDateFormat(val) {
      this.ruleForm.date = val;
    },
    fetchData() {
      this.filterData = [];
      getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date).then(
        res => {
          this.loading = false;
          const resData = res.data;
          const newArray = this.getNewArray(resData);
          const filterData = this.filterForm(newArray);
          this.getDuration(filterData);
          if (resData.length === 0) {
            alert("查無符合資料，請重新輸入");
          }
        }
      );
    },
    getNewArray(resData) {
      return resData.map(item => ({
        trainDate: item.TrainDate,
        depTime: item.OriginStopTime.DepartureTime,
        depID: item.OriginStopTime.StationID,
        depStation: item.OriginStopTime.StationName.Zh_tw,
        arrTime: item.DestinationStopTime.ArrivalTime,
        arrID: item.DestinationStopTime.StationID,
        arrStation: item.DestinationStopTime.StationName.Zh_tw,
        trainNo: item.DailyTrainInfo.TrainNo
      }));
    },
    filterForm(newArray) {
      const result = newArray.filter(item => {
        return item.depTime >= this.ruleForm.time;
      });
      result.sort((a, b) => {
        const depTimeA = a.depTime.toUpperCase();
        const depTimeB = b.depTime.toUpperCase();
        if (depTimeA < depTimeB) {
          return -1;
        }
        if (depTimeA > depTimeB) {
          return 1;
        }
        return 0;
      });
      if (this.ruleForm.time === "") {
        return result;
      }
      result.splice(5);
      return result;
    },
    getDuration(filterData) {
      // console.log("getDuration", filterData);
      const res = filterData.map(item => {
        let startTime = item["depTime"];
        let endTime = item["arrTime"];
        let startSplit = startTime.split(":");
        let start = parseInt(startSplit[0] * 60) + parseInt(startSplit[1]);
        let endSplit = endTime.split(":");
        let end = parseInt(endSplit[0] * 60) + parseInt(endSplit[1]);
        let diff = end - start;
        let hours = Math.floor(diff / 60);
        let minutes = diff % 60;
        let duration = String(hours + "時" + minutes + "分");

        return {
          ...item,
          duration
        };
      });

      this.filterData = res;
    },
    resetForm(TimetableSearch) {
      // console.log("resetForm");
      setTimeout(() => {
        this.$refs[TimetableSearch].resetFields();
        this.filterData = [];
      }, 3000);
      this.$emit("close");
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
.col {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}
</style>
