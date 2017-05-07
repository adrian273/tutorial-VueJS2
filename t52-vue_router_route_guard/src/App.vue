<template lang="html">
    <main>
        <button type="button" name="button" @click="change">Okultar</button>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'crew'}">crew</router-link>
        <router-link :to="{name: 'contact'}">contacto</router-link>
        <router-view></router-view>
        <p v-if="this.$store.state.auth"><i style="color:red;">Adrian</i></p>
    </main>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: mapMutations(['change'])
}

</script>

<style lang="css">
</style>
