import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: HomeView,
    meta:{ needLogin: true},
    children: [
       {
         path:'/home',
         name:'home',
         component: () =>import('../views/home')
       },
       {
        path:'/persion',
        name:'persion',
        component: () =>import('../views/persion/index.vue')
      },
       {
        path: '/user',
        name: 'user',
        component: () =>import('../views/user')
      },
      {
        path: '/ShangPin',
        name: 'ShangPin',
        component: () =>import('../views/ShangPin')
      },  
    ]  
  },
      {
        path: '/page01',
        name: 'page01',
        component: () =>import('../views/other/page01.vue')
      },
      {
        path: '/page02',
        name: 'page02',
        component: () =>import('../views/other/page02.vue')
      },
      {
        path:'/login',
        name:'login',
        component: () =>import('../views/Login/login.vue')
      },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//路由守卫

  router.beforeEach((to,from,next)=>{
     const token = store.state.user.token
     if(!token && to.name !=='login'){
       next({ name: 'login'})
     }else if(token && to.name === 'login'){
       next({ name:'home'})
     }else{
       next()
     }

  })

export default router
