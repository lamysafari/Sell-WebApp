import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResorce from 'vue-resource'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import './common/stylus/index.styl'
Vue.use(VueRouter)
Vue.use(VueResorce)

let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')

router.go('/goods')
