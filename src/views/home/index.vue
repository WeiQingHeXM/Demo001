
<!-- 注释部分为获取当前日期方法， --可能会影响浏览器内存导致浏览器页面崩溃，不建议释放，待后期优化。-->
<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <el-row class="topcard">
          <div class="user">
            <el-col :span="12"><img class="icon" :src="userImg" /></el-col>
            <el-col :span="12">
              <div class="userinfo">
                <P class="name">Admin</P> <P class="access">超级管理员</P>
              </div>
            </el-col>
          </div>
        </el-row>

        <div class="logininfo">
          <p>上次登陆时间：<span>2022-4-19 星期二</span></p>
          <p>上次登陆地点：<span>江苏-南京</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" style="margin-top: 20px; height: 510px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>


    <el-col :span="16">
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in countData" :key="item.name">
          <el-card class="cardnum" shadow="hover">
            <img class="imgicon" :src="item.icon" />
            <div class="detail">
              <p class="num">¥{{ item.value }}</p>
              <p class="text">{{ item.name }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 右侧中下部分-->
      <div class="mindDate">
        <el-card class="minCard" style="height: 280px" shadow="hover">
          <div style="height: 280px" ref="echarts"></div>
         


        </el-card>
      </div>

      <el-col :span="12">
        <div>
          <el-card shadow="hover" class="l-graph">
            <div style="height: 240px" ref="userEcharts"></div>
           
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-card shadow="hover" class="r-graph">
            <div style="height: 240px" ref="videoEcharts"></div>
            
          </el-card>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
//相关图标引入
import userImg from "../../assets/img/icon.jpg";
import burgerking from "../../assets/img/burger-king.png";
import microsoft from "../../assets/img/microsoft.png";
import riotgames from "../../assets/img/riot-games.png";
import leagueoflegends from "../../assets/img/league-of-legends.png";
import mcdonalds from "../../assets/img/mcdonalds.png";
import overwatchv1 from "../../assets/img/overwatch--v1.png";

//相关接口引入

import { getData } from "../../../api/data.js";
import * as echarts from "echarts";


export default {
  name: "home",
  // components:{
  //   EChart
  // },
  data() {
    return {
      userImg,
      burgerking,
      microsoft,
      riotgames,
      leagueoflegends,
      mcdonalds,
      overwatchv1,
      tableData: [],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日销量",
        monthBuy: "本月销量",
        totalBuy: "季度销量",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: riotgames,
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: burgerking,
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 30,
          icon: microsoft,
          color: "#5ab1ef",
        },
        {
          name: "本月已支付订单",
          value: 1234,
          icon: leagueoflegends,
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 225,
          icon: mcdonalds,
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 2215,
          icon: overwatchv1,
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyArry = Object.keys(order.data[0]);
        const series = [];
        keyArry.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArry,
          },
          series,
        };
        // this.chartData.order.xData = xData
        // this.chartData.order.series = series
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);

        // 用户图表
        const userOption = {
          legend: {
            //图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", //类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                color: "#17b3a3",
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
      
        const U = echarts.init(this.$refs.userEcharts);
        U.setOption(userOption);


        //饼图
       const videoOption = {
         tooltip:{
           trigger:"item",
         },
         color:[
           "#0f78f4",
           "#dd536b",
           "#9462e5",
           "#a6a6a6",
           "#e1bb22",
           "#39c362",
           "#3ed1cf",
         ],
         series:[
           {
             data: data.videoData,
             type: 'pie'
           }
         ],
       };
       const V = echarts.init(this.$refs.videoEcharts)
       V.setOption(videoOption);
       
        //   this.chartData.video.series = [
        //    {
        //      data: data.videoData,
        //      type: 'pie'
        //    }
        //  ]
      }
      console.log(res);
    });
  },
};
</script>


<style scoped>
.el-card {
  height: 230px;
}
.topcard {
  border-bottom: 0.5px solid;
}
.name {
  font-size: 25px;
  font-weight: bold;
  font-family: Sans-serif;
  margin-left: 45px;
}
.access {
  margin-left: 45px;
}
.icon {
  height: 40%;
  width: 40%;
  border-radius: 50%;
  margin-left: 50px;
  margin-top: 20px;
}
.imgicon {
  width: 85px;
  height: 85px;
  margin-top: -22px;
}
.logininfo {
  margin-left: 45px;
}
.cardnum {
  margin-top: 20px;
  width: 290px;
  height: 80px;
}
.num {
  font-size: 25px;
  font-weight: bold;
  margin-top: -85px;
  margin-left: 165px;
}
.text {
  font-size: 12px;
  margin-left: 165px;
}
.Boxnum {
  padding: 0;
}
.mindDate {
  height: 318px;
  margin-top: 15px;
}
.l-graph {
  margin-top: -10px;
  margin-left: -10px;
  height: 253px;
}
.r-graph {
  margin-top: -10px;
  height: 253px;
}

.minsecondcard {
  width: 400px;
  height: 230px;
  margin-left: 550px;
  margin-top: -230px;
}
</style>



