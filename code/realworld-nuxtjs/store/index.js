const cookieparser = process.server ? require('cookieparser') : undefined

//防止数据冲突，state必须是函数，返回数据对象
export const state = () => {
  return {
    //登录用户的信息
    user:null
  }
}

export const mutations = {
  setUserInfo (state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if(req.headers.cookie) {
      const objCookie = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(objCookie.user)
      } catch (error) {
        
      }
    }
    commit('setUserInfo', user)
  }
}