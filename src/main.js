import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import App from '../src/App.vue'

import router from './router.js'

import { Header, Swipe, SwipeItem, Button, Toast } from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)

Vue.use(VueRouter)
Vue.use(VueResource)

// 过滤器
Vue.filter('dateFormat', function (dataStr, pattern='YYYY/MM/DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})


const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
  },
  render: c => c(App),
  router
})

