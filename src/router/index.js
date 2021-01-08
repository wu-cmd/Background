import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// 1、安装插件
Vue.use(Router)
// //2、创建router 
const routes = [
// 配置映射关系
    {
        path:'',
        redirect:'/Login'
    },  
    {
        path:'/login',
        name: 'Login',
        component:Login
    },
]
const router = new Router({
    routes,
    mode:'history'
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