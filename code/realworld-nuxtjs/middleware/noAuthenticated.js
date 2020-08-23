export default function ({ store, redirect }) {
  // 如果需要用户信息且没有登录，跳转到登录页
  if (store.state.user) {
    return redirect('/')
  }
}