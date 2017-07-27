<template id="">
  <div class="" id="app">
    <h1>Mixins intro</h1>
    <form @submit.prevent="addTecnology">
      <input type="text" name="" value="" v-model="newTecnology">
    </form>
    <ul>
      <li v-for="l in learn">
        {{l.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mixins} from './mixins'
  export default {
    mixins: [mixins]
  }
</script>
