import { createRouter, createWebHistory } from 'vue-router'

import Index from '../pages/index.vue'
import Welcome from '../pages/welcome.vue'
import Login from '../pages/login.vue'
import Panel from '../pages/panel.vue'
import Register from '../pages/register.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/welcome'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
