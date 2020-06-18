<template>
  <div class="search">
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
                        value-format="yyyy-MM-dd"
                        @change="setFormat"
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
                        @change="setFormat"
                      ></el-date-picker>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="4" :md="2">
                  <div class="col bg-purple">
                    <el-button
                      type="primary"
                      @click="submitForm('ruleForm');fetchAPI();getData();"
                      icon="el-icon-search"
                    ></el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
            <Timetable :ruleForm="ruleForm" @submit="submitForm" />
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
import axios from "axios";

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
      }
    };
  },
  mounted() {
    // this.fetchAPI();
  },
  computed: {},
  methods: {
    changeFromTo() {
      console.log("change");
    },
    setFormat(val) {
      this.ruleForm.date = val;
      console.log("val", val);
    },
    submitForm(TimetableSearch) {
      this.$refs[TimetableSearch].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    fetchAPI() {
      this.getData(this.ruleForm.from, this.ruleForm.to, this.ruleForm.date);
    },
    getData(from, to, date) {
      console.log("getData", from, to, date);
      axios({
        methods: "GET",
        // data格式待調整
        // https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/${from}/to/${to}/${date}?$format=JSON
        url: `https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/${from}/to/${to}/2020-06-30?$format=JSON`
      }).then(res => {
        console.log(res.data);
      });
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
