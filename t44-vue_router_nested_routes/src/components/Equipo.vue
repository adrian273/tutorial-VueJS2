<template lang="html">
    <section>
        <p>Equipo</p>
        <button type="button" name="button" @click='infoAdrian()'>Info Adrian</button>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    methods: {
        infoAdrian() {
            this.$router.push('/equipo/adrian');
        }
    }
}
</script>

<style lang="css">
</style>
