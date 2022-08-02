import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permissionApi from './mockServeData/promission'
import userApi from './mockServeData/user'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)