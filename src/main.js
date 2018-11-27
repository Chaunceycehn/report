import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import toastRegistry from './components/toast/index'
import {Loading} from 'element-ui';

Vue.use(toastRegistry)
Vue.use(Loading)

Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false

 

let loading  
axios.interceptors.request.use(config => {
  loading = Loading.service({fullscreen: true, text: '正在查找报告/影像....' , background:"rgba(0, 0, 0, 0.8)"})
  return config
}, error => {
  loading.close()
  this.showToast('加载超时',2000)
  return Promise.reject(error)
})

// response拦截器，实现loading关闭
axios.interceptors.response.use(data => {
  loading.close()
  return data
}, error => {
  loading.close()
  this.showToast('加载失败',2000)
  return Promise.reject(error)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

