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
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        const position = {};
        console.log(to)
        if (to.hash) {
            position.selector = to.hash;
        }
        else {
            position.x = 100;
            position.y = 100;
        }
        return position;
    }
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
