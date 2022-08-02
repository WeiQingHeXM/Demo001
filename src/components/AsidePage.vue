<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#66CCFF"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3 class="TopText">{{isCollapse ? '控制台':'北晨后台管理系统'}}</h3>

    <router-link to="/home" tag="span">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>

    <router-link to="/ShangPin" tag="span">
      <el-menu-item index="2">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
    </router-link>

    <router-link to="/user" tag="span" >
      <el-menu-item index="3" >
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </router-link>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">其他</span>
      </template>
      
      <el-menu-item-group>
         <router-link to="/page01" tag="span">
        <el-menu-item index="4-1">页面1</el-menu-item>
        </router-link>

         <router-link to="/page02" tag="span">
        <el-menu-item index="4-2">页面2</el-menu-item>
         </router-link>

      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },


    // clickMenu(item){
    //     this.$store.commit('selectMenu',item)
    //     console.log(item)
    // }
  },
  computed:{
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
};
</script>

<style lang = "scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
   /* span{
     display: none;
   } */
}
.el-menu {
  height: 100%;
  /* background-color: #555B6A; */
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
#el-menu span.router-link-active {
  text-decoration: none;
}
.TopText{
  font-weight: 95;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
}


</style>