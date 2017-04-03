<template lang="html">
    <section style="background-color:blue;">
        <h1>Idententificador: {{$route.params.id}}</h1>
        <h1>Adrian Verdugo</h1>
        <h3>adrianverdugo273@gmail.com</h3>
        <router-link :to="'/equipo/'+ $route.params.id + '/fotos'">Fotos</router-link>
        <router-link :to="'/equipo/'+ $route.params.id + '/bio'">Biografia</router-link>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
