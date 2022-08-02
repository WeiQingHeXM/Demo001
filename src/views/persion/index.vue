<template>
      
  <div class="block">
    <el-carousel height="350px" :interval="5000" arrow="always">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">    
         <img width="100%" height="100%" v-bind:src="img.url">                                                                    
      </el-carousel-item>
    </el-carousel>
  </div>


      

</template>
<script>


export default {
    data(){
        return{
         imgList:[
            {url:require('@/assets/img/please.jpg')},
            {url:require('@/assets/img/01.webp')},
            {url:require('@/assets/img/02.webp')},
         ],

        }
    }
}

</script>


<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>