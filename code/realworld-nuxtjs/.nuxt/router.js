import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d2df71e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _2c3a5dd3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _5b49a4f5 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _eec9e796 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _116b90dc = () => interopDefault(import('../pages/setting' /* webpackChunkName: "" */))
const _015f1d61 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _6f654f82 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _0d2df71e,
    children: [{
      path: "/",
      component: _2c3a5dd3,
      name: "home"
    }, {
      path: "/login",
      component: _5b49a4f5,
      name: "login"
    }, {
      path: "/register",
      component: _5b49a4f5,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _eec9e796,
      name: "profile"
    }, {
      path: "/setting",
      component: _116b90dc,
      name: "setting"
    }, {
      path: "/editor/:slug?",
      component: _015f1d61,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6f654f82,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
