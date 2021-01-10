import Vue from 'vue'
import App from './App'
import router from './router'
// 手动配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//引入全局样式
import './assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL='http://frontdev.youqimei.com/plat/v1'
Vue.prototype.$http = axios //大家可以直接通过this访问$http 的axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
