import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main-page'
import Search from '@/views/search'
import Mine from '@/views/mine'
import Login from '@/views/login'
import Play from '@/views/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta:{
        requierAuth:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/play',
      name:'Play',
      component:Play
    }
  ]
})
