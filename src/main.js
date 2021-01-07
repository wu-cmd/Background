import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
// 错误import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  VRouter
}).$mount('#app')
