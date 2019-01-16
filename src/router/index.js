import Vue from 'vue'
import Router from 'vue-router'
//主页面
import index from '../components/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'finance',
      component: index
    }
  ]
})
