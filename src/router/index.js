import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dedication from '../views/Dedication.vue'
import Foreword from '../views/Foreword.vue'
import Credits from '../views/Credits.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dedication',
    name: 'Dedication',
    component: Dedication
  },
  {
    path: '/foreword',
    name: 'Foreword',
    component: Foreword
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
