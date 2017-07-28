import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  // para usarlo desde el mixins, custom option
  name: 'Instancia principal'
})
