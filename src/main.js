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
    goodslist: [
      { id: 1, title: 'vivo x9', price: 1800, mPrice: 1999, storage: 1000, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg?thumb=1&w=200&h=200&f=webp&q=90' },
      { id: 2, title: 'vivo x20', price: 2999, mPrice: 3188, storage: 888, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg?thumb=1&w=200&h=200&f=webp&q=90' },
      { id: 3, title: 'oppo find x', price: 4999, mPrice: 5188, storage: 666, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg?thumb=1&w=200&h=200&f=webp&q=90' },
      { id: 4, title: 'huawei mate 9', price: 3888, mPrice: 4188, storage: 200, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg?thumb=1&w=200&h=200&f=webp&q=90' }
    ],
    cart
  },
  mutations: {
    addToCart(state, goods) {
      let flag = false
      state.cart.some((item) => {
        if (item.id == goods.id) {
          item.count += parseInt(goods.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.cart.push(goods)
      }
      // 将购物车数据同步到localStorage中
     localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCart (state, newGoodsInfo) {
      state.cart.some((item) => {
        if (item.id == newGoodsInfo.id) {
          item.count = parseInt(newGoodsInfo.count)
          return true
        }
      })
      // 将购物车数据更新到localStorage中
     localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    delGoods (state, goodsId) {
      state.cart.forEach((item, index) => {
        if (item.id == goodsId) {
          state.cart.splice(index, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeSwitch (state) {
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

