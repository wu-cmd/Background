import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'
import Adduser from '@/components/Adduser'
import manage from '@/components/manage'
// 1、安装插件
Vue.use(Router)
// //2、创建router 
const routes = [
// 配置映射关系
    { path:'', redirect:'/Login'},  
    { path:'/login',  component: Login,  name: 'Login'},
    
    { 
        path:'/home',   
        component: Home, 
        name: 'Home',
        redirect:"/welcome",
        children:[{path:'/welcome',component:Welcome},
        {path:'/adduser',component:Adduser},
        { path:'/manage',  component: manage,  name: 'manage'}]
    }
]
const router = new Router({
    routes,
    mode:'history'
})
// 路由守卫   next()放行 next("login") 强制跳转
router.beforeEach((to, from, next)=>{
  if(to.path === "/login" && "/register")return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login')
  next()
})

export default router


























// Vue.use(Router)
// export default new Router({
//   routes: [
//     {path:'',redirect:'/Login'},  
//     {path: '/', name: 'Login', component: Login}
//   ],
//    mode:'history'
// })

// 路由守卫
// router.beforeEach((to, from, next)=>{
//   console.log("to",to);
//   if(to.path === "/login" && "/register")return next();
//   const tokenStr = window.localStorage.getItem('token')
//   console.log("localStorage.getItem('token')",localStorage.getItem('token'));
//   if(!tokenStr) return next('/login')
//   next()
// })