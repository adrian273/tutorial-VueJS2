<template lang="html">
    <main>
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/contacto'>Contacto</router-link></li>
            <li><router-link to='/usuario/273'>Usuario</router-link></li>
        </ul>
        <div class="">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
