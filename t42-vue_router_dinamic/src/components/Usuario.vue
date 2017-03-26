<template lang="html">
    <section>
        <p>Usuario {{id}}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // route muestra info de la ruta que se esta recibiendo
            id: this.$route.params.id
        }
    }
}
</script>
