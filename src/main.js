import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
