import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iView'
import Plugin from '@/plugins'
import { locale, Page } from 'iview'
import lang from 'iview/dist/locale/en-US'
import 'iview/dist/styles/iview.css'
import '@/assets/style.css'

locale(lang)
Vue.component('Page', Page)
Vue.use(Plugin)
iView.Message.config({duration: 30})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
