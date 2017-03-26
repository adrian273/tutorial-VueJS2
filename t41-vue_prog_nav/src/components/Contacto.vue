<template lang="html">
    <section>
        <p>Contacto</p>
        <button type="button" name="button" @click='volverHome()'>Volver a home</button>
    </section>
</template>

<script>
export default {
    created() {
        setTimeout ( () => this.$router.push('/'), 2000);
    },
    methods: {
      volverHome() {
          this.$router.push('/', () => console.log('Ruta cambiada')); //home
      }
    }
}
</script>

<style lang="css">
</style>
