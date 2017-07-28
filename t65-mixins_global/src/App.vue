<template>
  <div class="">
    <h1>Global mixins</h1>
    <form @submit.prevent="addTechnology">
      <input type="text" name="" value="" v-model="newTechnology">
    </form>
    <ul>
      <li v-for="l in learn">{{l.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mixin } from './mixins'
export default {
  created() {
    console.log('Componente');
  },
  mixins: [mixin],
  // para usarlo desde el mixins, custom option
  name: 'Desde App.vue'
}
</script>

<style lang="css">
</style>
