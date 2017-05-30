// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import './assets/js/rem'

import Swiper from 'vue-awesome-swiper'
Vue.use(Swiper)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

import './assets/css/clear.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requierAuth){
    if(to.path === '/mine'){
      if(!sessionStorage.getItem('loginState')){
        next({
          path:'/login',
          query: {redirect: to.fullPath}
        })
      }else{
        // console.log(sessionStorage.getItem('loginState'));
        next()
      }
    }
  }else{
    next()
  }
})
