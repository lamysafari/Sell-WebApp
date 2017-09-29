import Vue from 'vue'
import Router from 'vue-router'
import goods from '../src/components/goods/goods'

Vue.use(Router)

const routes = [
  {path: '/goods', component: goods}
]

const router = new Router({
  routes
})

export default{
  router
}
