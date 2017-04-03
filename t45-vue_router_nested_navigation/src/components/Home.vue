<template lang="html">
    <section style="background-color:yellow;">
        <p>Home</p>
        <router-link :to="'/equipo/'+ id">Equipo</router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: 'Adrian'
        }
    }
}
</script>

<style lang="css">
</style>
