import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: load('Hello') },
    { path: '*', component: load('Error404') } // Not found
  ]
})
