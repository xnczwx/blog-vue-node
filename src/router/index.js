import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/admin/login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
