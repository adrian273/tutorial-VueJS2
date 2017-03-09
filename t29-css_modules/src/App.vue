<style lang="css" module>

.subrayado {
    text-decoration: underline;
}

.rojo {
    color: red;
}

</style>

<template lang="html">
    <div class="">
      <h1 :class="[$style.rojo]">Este es un color Rojo</h1>
      <h1 :class="{[$style.subrayado] : subrayado}">Hola css Modules</h1>
    </div>

</template>

<script>

export default {
    data(){
      return {
            subrayado : true
      }
    }
}

</script>
