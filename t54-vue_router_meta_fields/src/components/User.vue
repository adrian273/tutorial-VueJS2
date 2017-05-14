<template lang="html">
    <section>
        <h1>Usuario</h1>
    </section>
</template>

<script>
  export default {
      beforeRouteEnter: ((to, from, next) => {
          console.info('antes de entrar a usuario')
          next((vm) => {
              console.log(vm);
          })
      }),
      beforeRouteUpdate: ((to, from, next) => {
          console.info('antes de cambiar la ruta sobre el mismo componente')
          console.log(this);
      }),
      beforeRouteLeave: ((to, from, next) => {
            console.info('Antes de salir')
            next()
      }),
  }
</script>
