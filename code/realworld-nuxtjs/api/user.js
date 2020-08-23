import { request } from '@/plugins/request'

// 登录
export const login = data => {
  return request({
    method: 'post',
    url: '/api/users/login',
    data
  })
}

// 注册
export const register = data => {
  return request({
    method: 'post',
    url: '/api/users',
    data
  })
}

// 设置用户信息
export const updataUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}
