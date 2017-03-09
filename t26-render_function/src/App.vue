<style media="screen">
h1{
  color: red;
}


</style>

<template id="">

<div class="">
  <elemento tipo="main">
      <h1>Hola mundo main</h1>
  </elemento>
  <elemento tipo="footer">
      <h1>Hola mundo footer</h1>
  </elemento>
  <elemento tipo="aside">
      <h1>Hola mundo aside</h1>
  </elemento>
  <elemento tipo="section">
      <h1>Hola mundo Vue</h1>
  </elemento>
</div>

</template>

<script>

import elemento from './components/Elemento.vue';
export default {
    components: {
        elemento
    }
}

</script>
