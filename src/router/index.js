import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardPage
  },
]

const router = new VueRouter({
  routes
})

export default router
