<template>
  <div class="">
    <h1>Mixins Merge</h1>
    <form @submit.prevent="addTechnology">
      <input type="text" name="" value="" v-model="newTechnology" >
    </form>
    <ul>
      <li v-for="l in learn">{{l.title}}</li>
    </ul>
  </div>
</template>

<script>
import {mixins} from './mixins'
export default {
  created() {
    console.log("mixins components");
    this.hello()
  },
  mixins: [mixins],
  methods: {
    hello() {
      alert('Hola desde el componente')
    }
  }
}
</script>

<style lang="css">
</style>
