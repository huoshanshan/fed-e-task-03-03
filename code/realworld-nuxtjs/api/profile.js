import { request } from '@/plugins/request'

// 获取作者详情
export const getProfile = username => {
  return request({
    method: 'get',
    url: `/api/profiles/${username}`
  })
} 

// 添加关注作者
export const addFollow = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
} 

// 取消关注作者
export const delFollow = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
} 