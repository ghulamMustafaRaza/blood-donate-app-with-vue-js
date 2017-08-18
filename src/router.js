import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)

function load (component) {
  return () => import(`@/${component}.vue`)
}

console.log(store.getters.user)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: load('Hello') },
    { path: '/login', component: load('login'), meta: { requireNotAuth: true } },
    { path: '/signup', component: load('signup'), meta: { requireNotAuth: true } },
    { path: '/all-donor', component: load('alldonor'), meta: { requireAuth: true } },

    { path: '*', component: load('Error404') } // Not found
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.requireAuth) {
    console.log(store.getters.user)
    if (!localStorage.getItem('user')) {
      next({ path: '/' })
    }
  }
  else if (to.meta.requireNotAuth) {
    console.log(store.getters.user)
    if (localStorage.getItem('user')) {
      next({ path: '/' })
    }
  }
  next()
})

export default router
