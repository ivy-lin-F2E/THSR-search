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
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">查時刻車次</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">查車站</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">查票價</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">暫存行程</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">購買車票</div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="搭乘">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">取票</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">傳送取票序號</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">乘車驗票</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">設定到站提醒</div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="搭乘結束">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">查快捷公車</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">查轉乘資訊</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">查搭乘紀錄</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">申請乘車證明</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">設定常用行程</div>
            </el-col>
          </el-row>
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
    return {};
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

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  padding: 30px 0;
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
