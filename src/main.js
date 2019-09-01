import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

import App from '../src/App.vue'
import router from './router.js'
// import { Header, Swipe, SwipeItem, Button, Toast, Lazyload } from 'mint-ui'
import MintUi from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import { stat } from 'fs';


// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.component(Toast.name, Toast)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUi)
Vue.use(VuePreview)
Vue.use(Vuex)
// Vue.use(Lazyload)

// 过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY/MM/DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 从localStorage中读取购物车数据
const cart = JSON.parse(localStorage.getItem('cart') || '[]')
const store = new Vuex.Store({
  state: {
    cart
  },
  mutations: {
    addToCart(state, goods) {
      let flag = false
      state.cart.some((item) => {
        if (item.id == goods.id) {
          item.count += goods.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goods)
      }
      // 将购物车数据同步到localStorage中
     localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    itemCount (state) {
      let count = 0
      state.cart.forEach((item) => {
        count += item.count
      })
      return count
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js!'
  },
  render: c => c(App),
  router,
  store
})

