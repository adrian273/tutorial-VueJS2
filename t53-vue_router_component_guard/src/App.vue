<template lang="html">
    <main>
        <ul>
            <li v-if="$store.state.auth"><a href="#" @click="changeState">Bloquiar</a></li>
            <li v-else><a href="#" @click="changeState">desbloloquiar</a></li>
        </ul>
        <br>
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'crew', params:{ident: 'adrian'}}">Crew</router-link></li>
            <li><a><router-link :to="{name: 'contact'}">Contact</router-link></a></li>
        </ul>
        <h1><i>App's</i></h1>
        <hr>
        <router-view></router-view>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { store } from './store'
export default {
    methods: mapMutations(['changeState'])
}
</script>

<style lang="css">
</style>
