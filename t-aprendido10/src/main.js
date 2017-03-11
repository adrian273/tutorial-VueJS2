import Vue from 'vue'
import App from './App.vue'
import { store } from './assets/js/store';


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
