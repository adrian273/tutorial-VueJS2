export const mixins = {
  data() {
    return {
      learn: [
        {name: 'VueJS2'},
        {name: 'Java'},
        {name: 'Laravel'}
      ],
      newTecnology: null
    }
  },
  methods: {
    addTecnology() {
      this.learn.unshift({
        name: this.newTecnology
      })
      this.newTecnology = null
    }
  }
}
