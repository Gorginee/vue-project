import VueRouter from 'vue-router'

// Tabbar的相关组件
import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Shopcart from '../components/tabbar/Shopcart.vue'
import Search from '../components/tabbar/Search.vue'
import Newslist from '../components/news/newslist.vue'
import Newsdetail from '../components/news/newsdetail.vue'
import Photolist from '../components/photo/photolist.vue'
import Photodetail from '../components/photo/photodetail.vue'
import Goodslist from '../components/goods/goodslist.vue'
import Goodsinfo from '../components/goods/goodsinfo.vue'
import Goodsdesc from '../components/goods/goodsdesc.vue'
import Goodscomment from '../components/goods/goodscomment.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcart', component: Shopcart },
    { path: '/search', component: Search },
    { path: '/news/newslist', component: Newslist },
    { path: '/news/newsdetail/:id', component: Newsdetail },
    { path: '/photolist', component: Photolist },
    { path: '/photodetail/:id', component: Photodetail },
    { path: '/goodslist', component: Goodslist },
    { path: '/goodsinfo/:id', component: Goodsinfo },
    { path: '/goodsdesc/:id', component: Goodsdesc, name: 'goodsdesc' },
    { path: '/goodscomment/:id', component: Goodscomment, name: 'goodscomment' }
  ],
  linkActiveClass: 'mui-active'
})


export default router