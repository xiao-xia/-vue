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
axios({
  url:"http://123.207.32.32:8000/home/data",
  //专门针对get请求的参数拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res)
})


//2.axios发送并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// })]).then(results =>{
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5

axios.all([axios({
    url:'/home/multidata'
  }),axios({
    baseURL:'http://123.207.32.32:8000',
    url:'/home/data',
    params:{
      type:'sell',
      page:5
    }
  })]).then(axios.spread((res1,res2) =>{
    console.log(res1)
    console.log(res2)
  }))

  const obj = {
    name:'kobe',
    age:30
  }

  const {name,age} = obj;

  const names = ['why','kobe','james']
  // const name1 = names[0]
  // const name2 = names[2]
  // const name3 = names[3]
  const [name1,name2,name3] = names;

