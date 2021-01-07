import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../../components/Login'

// vue.config.productionTip = false
// 1、安装插件
Vue.use(VueRouter)
//2、创建router 
const routes = [
// 配置映射关系
    {
        path:'',
        redirect:'/Login'
    },  
    {
        path:'/login',
        commponents:Login
    },
]
const router = new vue.VueRouter({
    routes,
    // mode:'history'
})


export default router