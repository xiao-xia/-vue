import axios from 'axios'

export function requets(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance(config)
    .then(res => {
      console.log(res)
    })
}