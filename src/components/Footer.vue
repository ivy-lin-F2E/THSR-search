<template>
  <div>
    <el-footer class="footer">
      <div class="link">
        <a href="https://www.facebook.com/thsrco" title="Facebook" target="_blank">粉絲專頁</a>
        <span>/</span>
        <a href="https://www.youtube.com/user/THSRFan" title="YouTube" target="_blank">YouTube</a>
        <span>/</span>
        <a href="#" title="CakeResume" target="_blank">關於作者</a>
      </div>
      <!-- <p>{{ testValue }}</p> -->
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "footer",
  components: {},
  data() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
a {
  font-size: 14px;
  letter-spacing: 4px;
  color: #eef4ed;
}
span {
  padding: 8px;
  font-size: 14px;
}
</style>
