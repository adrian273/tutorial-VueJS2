<template lang="jade">
    h1 {{tareasCompletadas}} Tareas Completadas
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {

        }
    },/*
    computed : {
        tareasCompletadas(){
            /*return this.$store.state.tareas.filter((tarea) => {
                return tarea.completado;
            }).length;
            return this.$store.getters.tareasCompletadas;
        }
    }*/
    computed : mapGetters(['tareasCompletadas']),
}
</script>

<style lang="css">
</style>
