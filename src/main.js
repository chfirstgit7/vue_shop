import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  console.log(config)
  // 给requesce中的Authorization添加token属性值
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})
Vue.prototype.$http = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
