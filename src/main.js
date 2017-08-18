// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

import { initializeApp, auth } from 'firebase'

var config = {
  apiKey: 'AIzaSyD0bFCG6AYvsLYwgWpcChT-GsVZD7PlhWM',
  authDomain: 'college-system.firebaseapp.com',
  databaseURL: 'https://college-system.firebaseio.com',
  projectId: 'college-system',
  storageBucket: 'college-system.appspot.com',
  messagingSenderId: '731872611024'
}
initializeApp(config)

auth().onAuthStateChanged((a) => {
  store.commit('setUser', a)
  store.dispatch('fetchDonors')
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
