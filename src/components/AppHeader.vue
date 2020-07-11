<template>
  <div>
    <el-header class="header">
      高鐵購GO!
      <!-- <el-popover placement="bottom">
        <el-menu>
          <el-menu-item index="1">
            <i class="el-icon-user"></i>Log in / Log out
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-chat-line-round"></i>繁中 / EN
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>使用教學
          </el-menu-item>
        </el-menu>
        <el-button
          type="warning"
          icon="el-icon-more"
          circle
          slot="reference"
          @click="visible = !visible"
        ></el-button>
      </el-popover>-->
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
// .el-icon-more {
//   border: 1px dotted #000;
//   padding: 8px 6px;
//   cursor: pointer;
// }
// .el-button {
//   border: none;
//   background-color: transparent;
// }
</style>