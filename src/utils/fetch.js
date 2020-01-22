import axios from 'axios'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
// var axios = require('axios')
// // 全局注册，之后可在其他组件中通过 this.$axios 发送数据
// axios.defaults.baseURL = 'http://192.168.0.101:8443/api'
// Vue.prototype.$axios = axios

const instance = axios.create({
  // baseURL: 'http://192.168.0.105:8443/api', // api的base_url
  // baseURL: 'https://api.dujin.org/bing/1366.php',
  baseURL: process.env.API_ROOT,
  timeout: 10000 // 请求超时时间
  // transformRequest: data => qs.stringify(data)
})

instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 最后暴露实例
export default instance
