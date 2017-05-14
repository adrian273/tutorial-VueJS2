<template lang="html">
    <section>
        <h1>Equipo</h1>
        <router-view></router-view>
        <router-view name="userbio"></router-view>
        {{ ident }}
    </section>
</template>
<script>
    export default {
        props: ['ident']
    }
</script>
