<template>
  <div class="search">
    <el-row>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerTime = true">查時刻車次</el-button>
          <el-drawer
            title="查時刻車次"
            :visible.sync="drawerTime"
            direction="rtl"
            size="100%"
            @close="resetForm('ruleForm')"
          >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
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
          </el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerSaved = true">暫存行程</el-button>
          <el-drawer title="暫存行程" :visible.sync="drawerSaved" direction="rtl" size="100%"></el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerStation = true" disabled>查車站</el-button>
          <el-drawer title="查車站" :visible.sync="drawerStation" direction="rtl" size="100%"></el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerFare = true" disabled>查票價</el-button>
          <el-drawer title="查票價" :visible.sync="drawerFare" direction="rtl" size="100%"></el-drawer>
        </div>
      </el-col>
      <el-col :xs="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerTicketing = true" disabled>購買車票</el-button>
          <el-drawer title="購買車票" :visible.sync="drawerTicketing" direction="rtl" size="100%"></el-drawer>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Timetable from "./Timetable";
import { getData } from "@/api/thsr";

export default {
  name: "Search",
  components: {
    Timetable
  },
  data() {
    return {
      drawerTime: false,
      drawerStation: false,
      drawerFare: false,
      drawerSaved: false,
      drawerTicketing: false,
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
  mounted() {
    getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date);
  },
  computed: {},
  methods: {
    changeFromTo() {
      const resFrom = this.ruleForm.to;
      const resTo = this.ruleForm.from;
      this.ruleForm.from = resFrom;
      this.ruleForm.to = resTo;
      // console.log(this.ruleForm);
    },
    setTimeFormat(val) {
      this.ruleForm.time = val;
      // console.log("time", val);
    },
    handleSubmit() {
      this.submitForm("ruleForm");
      this.fetchData(); // 原本this.fetchAPI();
    },
    setDateFormat(val) {
      this.ruleForm.date = val;
      // console.log("date", val);
    },
    submitForm(TimetableSearch) {
      this.$refs[TimetableSearch].validate(valid => {
        if (valid) {
          // alert("submit!");
          // console.log(this.ruleForm);
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
      this.filterData = result;
    },
    handleCloseDrawer() {
      setTimeout(() => {
        this.drawerTime = false;
      }, 3000);
    },
    resetForm(TimetableSearch) {
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
