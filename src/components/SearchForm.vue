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
    <Timetable
      v-if="filterData.length"
      :filterData="filterData"
      @click="handleSubmit"
      @close="handleCloseDrawer"
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
  mounted() {
    getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date);
  },
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
        time: [{ required: true, message: " " }],
        date: [{ required: true, message: " " }]
      },
      resData: [],
      newArray: [],
      filterData: []
    };
  },
  methods: {
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
      this.submitForm("ruleForm");
      this.fetchData();
    },
    setDateFormat(val) {
      this.ruleForm.date = val;
    },
    submitForm(TimetableSearch) {
      this.$refs[TimetableSearch].validate(valid => {
        if (valid) {
          // alert("submit!");
          // console.log("ruleForm", this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    fetchData() {
      getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date).then(
        res => {
          this.resData = res.data;
          this.getNewArray();
          this.filterForm();
        }
      );
    },
    getNewArray() {
      this.newArray = this.resData.map(item => ({
        TrainDate: item.TrainDate,
        DepTime: item.OriginStopTime.DepartureTime,
        DepID: item.OriginStopTime.StationID,
        ArrTime: item.DestinationStopTime.ArrivalTime,
        ArrID: item.DestinationStopTime.StationID,
        TrainNo: item.DailyTrainInfo.TrainNo
      }));
    },
    filterForm() {
      const result = this.newArray.filter(item => {
        return item.DepTime >= this.ruleForm.time;
      });
      result.sort(function(a, b) {
        var DepTimeA = a.DepTime.toUpperCase();
        var DepTimeB = b.DepTime.toUpperCase();
        if (DepTimeA < DepTimeB) {
          return -1;
        }
        if (DepTimeA > DepTimeB) {
          return 1;
        }
        return 0;
      });
      result.splice(5);
      this.spliceData = result;
      this.getDuration();
    },
    getDuration() {
      let i = this.spliceData[0];
      let startTime = i["DepTime"];
      let endTime = i["ArrTime"];
      let startSplit = startTime.split(":");
      let start = parseInt(startSplit[0] * 60) + parseInt(startSplit[1]);
      let endSplit = endTime.split(":");
      let end = parseInt(endSplit[0] * 60) + parseInt(endSplit[1]);
      let diff = end - start;
      let hours = Math.floor(diff / 60);
      let minutes = diff % 60;
      let duration = String(hours + "時" + minutes + "分");
      i["duration"] = duration;
      let i1 = this.spliceData[1];
      let startTime1 = i1["DepTime"];
      let endTime1 = i1["ArrTime"];
      let startSplit1 = startTime1.split(":");
      let start1 = parseInt(startSplit1[0] * 60) + parseInt(startSplit1[1]);
      let endSplit1 = endTime1.split(":");
      let end1 = parseInt(endSplit1[0] * 60) + parseInt(endSplit1[1]);
      let diff1 = end1 - start1;
      let hours1 = Math.floor(diff1 / 60);
      let minutes1 = diff1 % 60;
      let duration1 = String(hours1 + "時" + minutes1 + "分");
      i1["duration"] = duration1;
      let i2 = this.spliceData[2];
      let startTime2 = i2["DepTime"];
      let endTime2 = i2["ArrTime"];
      let startSplit2 = startTime2.split(":");
      let start2 = parseInt(startSplit2[0] * 60) + parseInt(startSplit2[1]);
      let endSplit2 = endTime2.split(":");
      let end2 = parseInt(endSplit2[0] * 60) + parseInt(endSplit2[1]);
      let diff2 = end2 - start2;
      let hours2 = Math.floor(diff2 / 60);
      let minutes2 = diff2 % 60;
      let duration2 = String(hours2 + "時" + minutes2 + "分");
      i2["duration"] = duration2;
      let i3 = this.spliceData[3];
      let startTime3 = i3["DepTime"];
      let endTime3 = i3["ArrTime"];
      let startSplit3 = startTime3.split(":");
      let start3 = parseInt(startSplit3[0] * 60) + parseInt(startSplit3[1]);
      let endSplit3 = endTime3.split(":");
      let end3 = parseInt(endSplit3[0] * 60) + parseInt(endSplit3[1]);
      let diff3 = end3 - start3;
      let hours3 = Math.floor(diff3 / 60);
      let minutes3 = diff3 % 60;
      let duration3 = String(hours3 + "時" + minutes3 + "分");
      i3["duration"] = duration3;
      let i4 = this.spliceData[4];
      let startTime4 = i4["DepTime"];
      let endTime4 = i4["ArrTime"];
      let startSplit4 = startTime4.split(":");
      let start4 = parseInt(startSplit4[0] * 60) + parseInt(startSplit4[1]);
      let endSplit4 = endTime4.split(":");
      let end4 = parseInt(endSplit4[0] * 60) + parseInt(endSplit4[1]);
      let diff4 = end4 - start4;
      let hours4 = Math.floor(diff4 / 60);
      let minutes4 = diff4 % 60;
      let duration4 = String(hours4 + "時" + minutes4 + "分");
      i4["duration"] = duration4;
      this.filterData = [i, i1, i2, i3, i4];
    },
    handleCloseDrawer() {
      setTimeout(() => {
        this.drawerTime = false;
      }, 3000);
    },
    resetForm(TimetableSearch) {
      console.log("resetForm");
      this.$refs[TimetableSearch].resetFields();
      this.resData = [];
      this.newArray = [];
      this.filterData = [];
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
