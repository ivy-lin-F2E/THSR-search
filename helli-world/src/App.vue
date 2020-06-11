<template>
  <div class="app">
    <THSRSearch />
  </div>
</template>

<script>
import THSRSearch from "./components/THSRSearch";

export default {
  name: "App",
  components: {
    THSRSearch
  },
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
      ticketData: [],
      testValue: ""
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

<style lang="scss">
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
}
.app {
  min-height: 100vh;
}

// .el-icon-more {
//   padding: 8px 6px;
//   cursor: pointer;
// }

// .footer {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #0b2545;
//   color: #eef4ed;
//   a {
//     font-size: 14px;
//     letter-spacing: 4px;
//     color: #eef4ed;
//   }
//   span {
//     padding: 8px;
//   }
// }

// @media screen and (max-width: 375px) {
//   .header {
//     background-color: #e38f24;
//   }
// }
</style>
