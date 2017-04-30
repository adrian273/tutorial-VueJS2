<template lang="html">
    <main>
          <button type="button" name="button" @click="cambiar">cambiar</button>
          <hr>
          <button type="button" name="button"><router-link :to="{name: 'home'}">Home</router-link></button>
          <router-view></router-view>
    </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: mapMutations(['cambiar']),
}
</script>

<style lang="css">
</style>
