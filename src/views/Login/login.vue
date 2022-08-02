<template @keyup.enter.native="login">

<div>
 <vue-particles
      color="#646775"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="2"
      linesColor="#2E3143"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="148"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
</vue-particles>


  <el-form
    class="login-container"
    :model="loginform"
    status-icon
    :rules="rules"
    ref="loginform"
    label-width="100px"
    
  >
    <h3 class="login_title">系统登陆</h3>
    <el-form-item
      class="username"
      label="用户名"
      label-width="80px"
      prop="username"
    >
      <el-input
        type="input"
        v-model="loginform.username"
        autocomplete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input
        type="password"
        v-model="loginform.password"
        autocomplete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    
    <el-form-item class="login_submit">
        <el-button type="primary" :disabled="!canSubmit" @click="login" class="login_submit">登录</el-button>
    </el-form-item>
  </el-form>



  
  </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: "login",
  data() {
    return {
      loginform: {username:'',password:''},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度不能小于3位", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed:{
     canSubmit(){
      const username01 =  this.loginform.username
      const password02 = this.loginform.password
      return Boolean(username01 && password02)
     }   
  },
  methods:{
     login(){
          const token =  Mock.Random.guid()
          console.log(token);
          // console.log(token)
          console.log("维生素C")
          this.$store.commit('setToken',token)
          localStorage.setItem('token',token) //将用户token存入localStorage 避免页面刷新丢失Token
          this.$router.push({ name:'home'})

        // this.$api.data
            // login(this.loginform.username,this.loginform.password)
            // .then(({ data }) =>{
            //   const { accessToken } = data
            //   localStorage.setItem('token',accessToken)
            //   this.$router.push({ name:'home'})
            // }).catch((err)=>{
            //   this.$message.error("登陆错误！")
            // })
            },
            
  }
};
</script>

<style scoped>
.login-container{
  position: relative;
   border-radius: 15px;
   background-clip: padding-box;
   margin: 180px auto;
   width: 350px;
   padding: 35px 35px 15px 35px;
   background-color: #fff;
   border: 1px solid #eaeaea;
   box-shadow: 0 0 25px #cac6c6;
}
.login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;

}
.login-submit{
    margin: 10px auto 0 auto;
}


#particles-js {
  background-color: #080c22;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>