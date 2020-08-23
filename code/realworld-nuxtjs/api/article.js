import { request } from '@/plugins/request'

// 文章列表
export const getArticle = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 文章列表
export const getYourFeedArticle = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}
// 文章列表
export const addFavorite = slug => {
  return request({
    method: 'post',
    url: `/api/articles/${slug}/favorite` 
  })
}
// 文章列表
export const deletelFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}
// 文章详情内容
export const getArticleContent = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}/comments`
  })
}

// 添加文章评论
export const addComments = (slug, data) => {
  return request({
    method: 'post',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

// 删除文章评论
export const delComments = (slug, id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}

// 新建文章
export const createArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}

// 重新编辑文章
export const updateArticle = data => {
  return request({
    method: 'PUT',
    url: `/api/articles/${data.article.slug}`,
    data
  })
}

// 删除文章
export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}