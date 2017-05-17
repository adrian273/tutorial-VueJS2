import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from './routes'
import { store } from './store'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    console.log('Ruta global');
    next();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
