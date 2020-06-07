<template>
  <el-container class="app">
    <title>高鐵購 GO !</title>
    <el-header class="header">
      高鐵購GO! (Collapse)
      <i class="el-icon-more"></i>
    </el-header>
    <el-main class="main">
      <el-tabs type="border-card">
        <el-tab-pane label="開始">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="查時刻車次" name="1">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="regionFrom">
                  <el-select v-model="ruleForm.regionFrom" placeholder="出發站">
                    <el-option label="南港站" value="Nangang"></el-option>
                    <el-option label="台北站" value="Taipei"></el-option>
                    <el-option label="板橋站" value="Banqiao"></el-option>
                    <el-option label="桃園站" value="Taoyuan"></el-option>
                    <el-option label="新竹站" value="Hsinchu"></el-option>
                    <el-option label="苗栗站" value="Miaoli"></el-option>
                    <el-option label="台中站" value="Taichung"></el-option>
                    <el-option label="彰化站" value="Changhua"></el-option>
                    <el-option label="雲林站" value="Yunlin"></el-option>
                    <el-option label="嘉義站" value="Chiayi"></el-option>
                    <el-option label="台南站" value="Tainan"></el-option>
                    <el-option label="左營站" value="Zuoying"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" icon="el-icon-refresh"></el-button>
                </el-form-item>
                <el-form-item prop="regionTo">
                  <el-select v-model="ruleForm.regionTo" placeholder="到達站">
                    <el-option label="南港站" value="Nangang"></el-option>
                    <el-option label="台北站" value="Taipei"></el-option>
                    <el-option label="板橋站" value="Banqiao"></el-option>
                    <el-option label="桃園站" value="Taoyuan"></el-option>
                    <el-option label="新竹站" value="Hsinchu"></el-option>
                    <el-option label="苗栗站" value="Miaoli"></el-option>
                    <el-option label="台中站" value="Taichung"></el-option>
                    <el-option label="彰化站" value="Changhua"></el-option>
                    <el-option label="雲林站" value="Yunlin"></el-option>
                    <el-option label="嘉義站" value="Chiayi"></el-option>
                    <el-option label="台南站" value="Tainan"></el-option>
                    <el-option label="左營站" value="Zuoying"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item required>
                  <el-col :span="11">
                    <el-form-item prop="startTime">
                      <el-time-picker
                        type="fixed-time"
                        placeholder="出發時間"
                        v-model="ruleForm.startTime"
                        style="width: 217.5px;"
                      ></el-time-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item required>
                  <el-col :span="11">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="出發日期"
                        v-model="ruleForm.date1"
                        style="width: 217.5px;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="依行車時間排序" prop="shortestTime">
                  <el-switch v-model="ruleForm.shortestTime"></el-switch>
                </el-form-item>
                <div>
                  <el-button-group>
                    <!-- <el-button @click="resetForm('ruleForm')">全部清除</el-button> -->
                    <el-button type="primary" @click="submitForm('ruleForm')" icon="el-icon-search"></el-button>
                  </el-button-group>
                </div>
                <br />
              </el-form>
              <el-form
                :model="resultForm"
                ref="resultForm"
                label-width="100px"
                class="demo-resultForm"
              >
                <el-table :data="tableData" @row-click="getData" style="width: 100%">
                  <el-table-column prop="trainNum" label="車次"></el-table-column>
                  <el-table-column prop="resultStart" label="出發時間"></el-table-column>
                  <el-table-column prop="resultEnd" label="到達時間"></el-table-column>
                  <el-table-column prop="duration" label="行車時間"></el-table-column>
                </el-table>
                <br />
                <div>
                  <el-button-group>
                    <el-button
                      type="info"
                      @click="storeForm('ruleForm')"
                      icon="el-icon-collection-tag"
                    >暫存</el-button>
                    <el-button @click="submitForm('ruleForm')" icon="el-icon-search"></el-button>
                    <!-- 重新查詢需注意要沿用舊的方法還是要做新的 -->
                    <el-button
                      type="primary"
                      @click="submitForm('ruleForm')"
                      icon="el-icon-bank-card"
                    >購票</el-button>
                  </el-button-group>
                </div>
                <br />
              </el-form>

              <div>警示「該車次已截止訂票，改搭其他車次?」</div>
            </el-collapse-item>
            <el-collapse-item title="查車站" name="2" disabled>
              <div>here查車站</div>
            </el-collapse-item>
            <el-collapse-item title="查票價" name="3" disabled>
              <div>here查票價</div>
            </el-collapse-item>
            <el-collapse-item title="暫存行程" name="4">
              <div>描述：可以查看已經查詢好的車次資料</div>
            </el-collapse-item>
            <el-collapse-item title="購買車票" name="5">
              <div>here購買車票</div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="搭乘">
          <el-collapse v-model="activeName2" accordion>
            <el-collapse-item title="取票" name="1" disabled>
              <div>7/20 台北 → 左營</div>
              <div>7/31 左營 → 烏日</div>
            </el-collapse-item>
            <el-collapse-item title="傳送取票序號" name="2" disabled>
              <div>簡訊發送</div>
              <div>email發送</div>
            </el-collapse-item>
            <el-collapse-item title="乘車驗票" name="3" disabled>
              <div>6/25 台北 → 烏日</div>
              <div>6/29 烏日 → 左營</div>
            </el-collapse-item>
            <el-collapse-item title="設定到站提醒" name="4">
              <div>選擇日期</div>
              <div>響鈴時間</div>
              <div>設定</div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="搭乘結束">
          <el-collapse v-model="activeName3" accordion>
            <el-collapse-item title="查快捷公車" name="1">
              <div>選擇出發站</div>
              <div>時刻表</div>
            </el-collapse-item>
            <el-collapse-item title="查轉乘資訊" name="2">
              <div>轉乘台鐵</div>
              <div>轉乘公車</div>
            </el-collapse-item>
            <el-collapse-item title="查搭乘紀錄" name="3">
              <div>5/25 台北 → 烏日</div>
              <div>5/29 烏日 → 左營</div>
            </el-collapse-item>
            <el-collapse-item title="申請乘車證明" name="4" disabled>
              <div>選擇車票</div>
              <div>送出申請</div>
            </el-collapse-item>
            <el-collapse-item title="設定常用行程" name="5">
              <div>台中出差</div>
              <div>高雄早9上課</div>
              <div>新增常用行程</div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer class="footer">
      <div class="link">
        <a href="https://www.facebook.com/thsrco" title="Facebook" target="_blank">粉絲專頁</a>
        <span>/</span>
        <a href="https://www.youtube.com/user/THSRFan" title="YouTube" target="_blank">YouTube</a>
        <span>/</span>
        <a href="#" title="CakeResume" target="_blank">關於作者</a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      // activeName: "1",
      // activeName2: "1",
      // activeName3: "1",
      ruleForm: {
        regionFrom: "",
        regionTo: "",
        startTime: "",
        date1: ""
      },
      rules: {
        regionFrom: [{ required: true, message: " ", trigger: "change" }],
        regionTo: [{ required: true, message: " ", trigger: "change" }],
        startTime: [
          {
            type: "date",
            required: true,
            message: " ",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: " ",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: " ",
            trigger: "change"
          }
        ]
      },
      tableData: [
        {
          trainNum: "803",
          resultStart: "06:26",
          resultEnd: "08:40",
          duration: "2:14"
        },
        {
          trainNum: "203",
          resultStart: "06:30",
          resultEnd: "08:15",
          duration: "1:45"
        },
        {
          trainNum: "603",
          resultStart: "06:51",
          resultEnd: "08:50",
          duration: "1:59"
        },
        {
          trainNum: "805",
          resultStart: "07:11",
          resultEnd: "09:25",
          duration: "2:14"
        }
      ],
      ticketData: []
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          console.log(this.ruleForm);
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
}
.app {
  min-height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #409eff;
  font-size: 20px;
  letter-spacing: 4px;
  color: #eef4ed;
}
.el-icon-more {
  padding: 8px 6px;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b2545;
  color: #eef4ed;
  a {
    font-size: 14px;
    letter-spacing: 4px;
    color: #eef4ed;
  }
  span {
    padding: 8px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    background-color: #e38f24;
  }
}
</style>
