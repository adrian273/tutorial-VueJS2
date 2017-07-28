export const mixins = {
  created() {
    console.log("created from mixins")
    // el methods del componente lo sobreescribe
    this.hello()
  },
  data() {
    return {
      learn: [
        {title: 'Firebase'},
        {title: 'ES6'},
        {title: 'Java'}
      ],
      newTechnology: null
    }
  },
  methods: {
    addTechnology() {
      this.learn.unshift({
        title: this.newTechnology
      })
    },
    hello() {
      alert('Hola desde mixins')
    }
  }
}
