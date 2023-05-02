import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from './paths'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: paths
})

export default router
