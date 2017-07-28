import Vue from 'vue'

// global mixins
Vue.mixin({
  created() {
    //console.info('Desde mixins global')
    this.hello(this.$options.name)
  },
  methods: {
    hello(name) {
      alert(`Hola desde ${name}`)
    }
  }
})

// local instance
export const mixin = {
  created() {
    console.log('Desde el mixins');
  },
  data() {
    return {
      learn: [
        {title: 'Java'},
        {title: 'Videojuegos'},
        {title: 'Vuejs2'}
      ],
      newTechnology: null
    }
  },
  methods: {
    addTechnology() {
      this.learn.unshift({
        title: this.newTechnology
      })
      this.newTechnology = null
    }
  }
}
