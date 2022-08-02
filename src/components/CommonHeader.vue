<template>
  <header>
    <el-row>
      <el-col :span="8">
        <div class="l-concent">
          <el-button
            @click="handMenu"
            plain
            icon="el-icon-menu"
            size="mini"
            
          ></el-button>
          <div class="TopText">
            <h3 ><a style="color: #fff; text-decoration: none" href='/home'>首页</a></h3>
          </div>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="r-concent">
          <el-dropdown trigger="click" szie="mini" >
            <span>
              <img class="user" :src="userImg" />
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item @click.native="center">个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout" >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </header>
</template>


<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/img/icon.jpg"),
    };
  },
  methods: {
    handMenu() {
      this.$store.commit("collapseMenu");
    },
    logout(){
      this.$store.commit('clearToken')
      var storage = window.localStorage;
      storage.clear();
      this.$router.push({ name:'login'})
    },
    center(){
      
      this.$router.push({ name:'persion'})
    }
  },
};
</script>

<style  lang ='scss' scoped>
.heder {
  height: 100%;
}
.el-button {
  margin-top: 17px;
  margin-right: 0px;
}

.TopText {
  overflow: hidden;
  margin-top: -46px;
  margin-left: 70px;
}
.r-concent {
  margin-left: 145%;
  margin-top: 10px;
}
.user {
  margin-left: 200px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-breadcrumb-item{
  color: #fff;
}
</style>