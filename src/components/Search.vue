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
            :destroy-on-close="true"
          >
            <SearchForm @close="handleCloseDrawer" />
          </el-drawer>
        </div>
      </el-col>
      <el-col :xs="12" :md="24">
        <div class="button-wrap">
          <el-button class="button" @click="drawerSaved = true">暫存行程</el-button>
          <el-drawer
            title="暫存行程"
            :visible.sync="drawerSaved"
            direction="rtl"
            size="100%"
            destroy-on-close
          >
            <Saved />
          </el-drawer>
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
import SearchForm from "./SearchForm";
import Saved from "./Saved";

export default {
  name: "Search",
  components: {
    SearchForm,
    Saved
  },
  data() {
    return {
      drawerTime: false,
      drawerStation: false,
      drawerFare: false,
      drawerSaved: false,
      drawerTicketing: false
    };
  },
  methods: {
    handleCloseDrawer() {
      setTimeout(() => {
        this.drawerTime = false;
      }, 3000);
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