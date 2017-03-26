<template lang="html">
    <main>
        <p>App</p>
        <div class="">
            <ul>
                <li><router-link to='/'>Home</router-link></li>
                <li><router-link to='/contacto'>Contacto</router-link></li>
            </ul>
            <hr>
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
