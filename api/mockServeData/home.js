//mock数据模拟（后台）
import Mock from "mockjs";

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                //饼图
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '苹果',
                        value: 5999
                    },
                    {
                        name: 'vivo',
                        value: 3999
                    },
                    {
                        name: 'oppo',
                        value: 1999
                    },
                    {
                        name: '魅族',
                        value: 5999
                    },
                    {
                        name: '三星',
                        value: 6999
                    },
                ],
                //柱状图
                userData: [
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 66,
                        active: 800
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 779
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 178
                    },
                ],
                //折线图
                orderData: {
                    date: ['20221001', '20221002', '20221003', '20221004', '20221005', '20221006', '20221007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 300,
                        monthBuy: 4500,
                        totalBuy: 32000
                    },
                    {
                        name: '苹果',
                        todayBuy: 1000,
                        monthBuy: 8600,
                        totalBuy: 75000
                    },
                    {
                        name: '小米',
                        todayBuy: 789,
                        monthBuy: 6700,
                        totalBuy: 65400
                    },
                    {
                        name: '三星',
                        todayBuy: 200,
                        monthBuy: 7990,
                        totalBuy: 12100
                    },
                    {
                        name: '魅族',
                        todayBuy: 700,
                        monthBuy: 3200,
                        totalBuy: 45000
                    },


                ]


            }
        }


    }
}