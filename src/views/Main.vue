<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <AsidePage></AsidePage>
    </el-aside>
    <el-container>
      <el-header>
      <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
        
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsidePage from "../components/AsidePage.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  name: "HomeView",
  components: {
    AsidePage,
    CommonHeader,

  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.el-header {
  background-color: black;
}
.el-main {
  padding-top: 0;
}
</style>