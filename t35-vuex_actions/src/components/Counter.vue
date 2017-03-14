<template lang="pug">
    div()
        h1 Contador: {{count}}
        button(type='button' name='aumentar' @click='aumentarAsinc(12)' v-bind:class='[$style.blue]') Aumentar
        button(type='button' @click='reducirAsinc({cantidad: 15})' v-bind:class='[$style.red]') Reducir
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed : mapState({
        count : (state) => {
            return state.contador;
        }
    }),/*
    methods: {
        aumentar(){
            //this.$store.commit('aumentar');
            this.$store.dispatch('aumentarAsinc');
        },
        reducir() {
            this.$store.dispatch('reducirAsinc');
        }
    }*/
    methods : mapActions(['aumentarAsinc', 'reducirAsinc'])
}
</script>

<style lang="less" module>
    .blue {
        color : white;
        background-color: blue;
    }
    .red {
        color: white;
        background-color: red;
    }
</style>
