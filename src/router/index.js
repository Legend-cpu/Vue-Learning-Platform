import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import UserCenter from '@/views/UserCenter.vue'
import StudyDetail from '@/views/StudyDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/user',
    component: UserCenter,
    meta: { requiresAuth: true },
    name: 'UserCenter'
  },
  {
    path: '/study',
    component: StudyDetail,
    meta: { requiresAuth: true },
    name: 'StudyDetail'
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫，检查是否需要身份验证
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里检查用户是否已登录
    if (!store.state.isLoggedIn) {
      alert('请先登录！')
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
