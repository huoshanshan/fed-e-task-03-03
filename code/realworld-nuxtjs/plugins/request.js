import axios from 'axios'

export const request =  axios.create({
  baseURL: 'https://conduit.productionready.io'
})

export default ({store}) => {
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state 
    // 发送请求时有 token 把 token 放到请求 headers 里
    if(user && user.token) {
      config.headers.authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log(error,"11")
    return Promise.reject(error);
  });
}