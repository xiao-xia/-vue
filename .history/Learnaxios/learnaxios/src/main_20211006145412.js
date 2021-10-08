import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
axios({
  url:"http://123.207.32.32:8000/home/multidata",
  method:'get'
}).then(res=>{
  console.log(res)
})

//2.axios发送并发请求


