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
  // console.log(res)
})
axios({
  url:"http://123.207.32.32:8000/home/data",
  //专门针对get请求的参数拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  // console.log(res)
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

// const obj = {
//   name:'kobe',
//   age:30
// }

// const {name,age} = obj;

// const names = ['why','kobe','james']
// // const name1 = names[0]
// // const name2 = names[2]
// // const name3 = names[3]
// const [name1,name2,name3] = names;

//3.使用全局的axios和对应的配置在进行网络请求
/* axios.defaults.baseURL = 'http://123.207.33.33:8000'
axios.defaults.timeout = 10000

axios.all([axios({
    url:'/home/multidata'
  }),axios({
    url:'/home/data',
    params:{
      type:'sell',
      page:5
    }
  })]).then(axios.spread((res1,res2) =>{
    console.log(res1)
    console.log(res2)
  }))

  axios({
    url:'http://123.207.32.32:8080/category'
  }) */

  //4.创建对应的axios的实例
  /* const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance1({
    url:'/home/multidata'
  }).then(res => {
    console.log(res);
  })

  instance1({
    url:'/home/data',
    params:{
      type:'pop',
      page:1
    }
  }).then(res => {
    console.log(res);
  })

  const instance2 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:10000,
    // header:{

    // }
  }) */

  //5.封装request模块
  import {request} from "./network/request.js"

  // request({
  //   url:'/home/multidata'
  // },res =>{
  //   console.log(res)
  // },err =>{
  //   console.log(err)
  // })

  // request({
  //   baseConfig:{

  //   },
  //   success:function(res){

  //   },
  //   failure:function(err){

  //   }
  // })