import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue'),
    children:[
      {
        path:'/login/psw',
        name:'/login_psw',
        component: () => import( '../components/loginsign/psw.vue'),
      },
      {
        path:'/login/mes',
        name:'/login_mes',
        component: () => import( '../components/loginsign/mes.vue'),
      },
    ]
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import( '../views/sign.vue')
  },
  {
    path: '/lubo',
    name: 'lubo',
    component: () => import( '../views/lu.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import( '../views/me.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
