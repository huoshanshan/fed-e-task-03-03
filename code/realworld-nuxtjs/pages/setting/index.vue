<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(msg, index) in messages" :key="index">{{field}} {{msg}}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" v-model="user.image" type="text" placeholder="URL of profile picture" />
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.email" type="text" placeholder="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password"/>
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updataUser } from '@/api/user'
import { mapMutations } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'SettingPage',
  middleware: 'authenticated',
  data() {
    const  userInfo  = this.$store.state.user
    return {
      user: {
        image: userInfo.image || "",
        email: userInfo.email ||  "",
        username: userInfo.username || "",
        password: "",
        bio: userInfo.bio ||  ""
      },
      errors: {}
    };
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    async onSubmit () {
      try {
        const { data } = await updataUser({
          user: this.user
        })
        console.log(data,"data")
        Cookie.set('user', data.user)
        //提交 mutations 把 data 存储到容器中
        this.setUserInfo(data.user)
        //登录注册成功调转到首页
        this.$router.push(`/profile/${data.user.username}`)
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
    logout(){
      this.setUserInfo('')
      Cookie.set('user', '')
      this.$router.push('/')
    }
  }
};
</script>