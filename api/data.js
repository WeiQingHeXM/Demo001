
// 后台接口配置
import axios from "./axios"





//闲置接口
export const getMenu = (param) => {
  return  axios.request({
      url:'/permission/getMenu',
      method:'post',
      data: param
  })
}

export const getData = () =>{
  return axios.request({
    url:'/home/getData'
    
  })
}



