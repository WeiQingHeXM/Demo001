import Mock from 'mockjs'
export default{
    getMenu: config => {
        const { username,password} = JSON.parse(config.body)
        //先判断用户是否存在
        //判断账号与密码是否对应
        if (username === 'admin' && password === 'admin'){
            return {
                code: 20000,
                data:{
                    menu:[
                               {
                                 path:'/home',
                                 name:'home',
                                 label:'首页',
                                 url:'home/index'
                               },
                               {
                                path: '/user',
                                name: 'user',
                                label:'用户管理',
                                url:'user/index'
                              },
                              {
                                path: '/ShangPin',
                                label:'商品管理',
                                name: 'ShangPin',
                                url:'ShangPin/index'
                              },
                        
                              {
                                path: '/page01',
                                name: 'page01',
                                label:'其他/页面1',
                                url:'other/page01'
                              },
                              {
                                path: '/page02',
                                name: 'page02',
                                label:'其他/页面2',
                                url:'other/page02'
                              },
                    ],
                    token: Mock.Random.guid(),
                    message:'获取成功'
                }
            }
        }else if(username === 'nannan' && password === 'nannan'){
          return{
              code:20000,
              data:{
                  menu:[
                    {
                        path:'/home',
                        name:'home',
                        // component: () =>import('../views/home')
                        url:'home/index'
                      },
                      {
                        path: '/ShangPin',
                        name: 'ShangPin',
                        url:'ShangPin/index'
                         
                      }
                  ],
                  token: Mock.Random.guid(),
                  message:'获取成功'
              }
          }
        }else{
            return {
                code: -999,
                data:{
                    message:'账号或密码错误！'
                }  
            }
        }
    }
}