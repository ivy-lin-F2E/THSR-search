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
              <div>here查時刻車次</div>
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
  name: 'App',
  components: {},
  data () {
    return {
      // activeName: "1",
      // activeName2: "1",
      // activeName3: "1",
    }
  }
}
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
  background-color: #409EFF;
  font-size: 20px;
  letter-spacing: 4px;
  color: #EEF4ED;
}
.el-icon-more {
  padding: 8px 6px;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0B2545;
  color: #EEF4ED;
  a {
    font-size: 14px;
    letter-spacing: 4px;
    color: #EEF4ED;
  }
  span {
    padding: 8px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    background-color: #E38F24;
  }
}
</style>
