import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../src/App.vue'

import router from './router.js'

import { Header } from 'mint-ui'
import './lib/mui/css/mui.css'

Vue.component(Header.name, Header)
Vue.use(VueRouter)



const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
  },
  render: c => c(App),
  router
})

