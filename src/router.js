import VueRouter from 'vue-router'

// Tabbar的相关组件
import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Shopcart from '../components/tabbar/Shopcart.vue'
import Search from '../components/tabbar/Search.vue'
import Newslist from '../components/news/newslist.vue'
import Newsdetail from '../components/news/newsdetail.vue'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcart', component: Shopcart },
    { path: '/search', component: Search },
    { path: '/news/newslist', component: Newslist },
    { path: '/news/newsdetail/:id', component: Newsdetail }
  ],
  linkActiveClass: 'mui-active'
})


export default router