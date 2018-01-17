import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from 'components/home/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homeIndex',
      component: HomeIndex
    },
    {
      path: '/homeIndex',
      name: 'homeIndex',
      component: HomeIndex
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
