import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/style.css'

window.jQuery = window.$ = require('jquery')
require('bootstrap/dist/js/bootstrap.min.js')

Vue.config.productionTip = false

router.afterEach((to, from) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
