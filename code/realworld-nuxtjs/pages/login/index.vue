<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(msg, index) in messages" :key="index">{{field}} {{msg}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="user.username" required placeholder="Your Name" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="email" required v-model="user.email" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" required minlength="8" v-model="user.password" placeholder="Password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{ isLogin ? 'Sign in' : 'Sign up' }}</button>
          </form> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
import { mapMutations } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: "LoginIndex",
  middleware: 'noAuthenticated',
  computed: {
    // 通过路由判断是否是登录页面
    isLogin () {
      return this.$route.name === "login"
    }
  },
  data() {
    return {
      user:{
        email: '',
        password: '',
        username: ''
      },
      errors : {
        
      }
    }
  },
  methods: {
    //映射 mutations 中的方法，方便调用
    ...mapMutations(['setUserInfo']),
    async onSubmit() {
      try {
        const { data } = this.isLogin
        ? await login({
            user: this.user
          })
        : await register({
            user: this.user
          })
          console.log(data,"data")
          Cookie.set('user', data.user)
          //提交 mutations 把 data 存储到容器中
          this.setUserInfo(data.user)
          // 登录注册成功调转到首页
          this.$router.push('/')
      } catch (error) {
        // console.log(error.response.data)
        this.errors = error.response.data.errors
      }
    }
  }
};
</script>