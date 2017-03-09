
<!-- agregar scoped en caso de querer estilos locals, solamente del compoenente -->
<style lang="css" scoped>


li a {
    color: red;
}

</style>

<template lang="html">

<div class="">
    <h2>Tareas que realizar</h2>
    <ul>
        <li v-for="tarea in tareasHacer">
            <a href="#" @click="actualizarEstado(tarea)" v-text="tarea.nombre"></a>
        </li>
    </ul>
    <h2>Tareas realizadas</h2>
    <ul>
        <li v-for="tarea in tareasFin">
            <a href="#" @click="actualizarEstado(tarea)" v-text="tarea.nombre"></a>
        </li>
    </ul>
</div>

</template>

<script>

export default {
    data() {
            return {
                tareas: [{
                    nombre: "Aprender Vue.js ",
                    completado: false
                }, {
                    nombre: "Aprender ES6",
                    completado: false
                }, {
                    nombre: "Pintar GRAFF",
                    completado: false
                }, {
                    nombre: "arreglar el router del GRN",
                    completado: false
                }, {
                    nombre: "Pasar de codeigneter 3 a laravel para poder usar VUE.js",
                    completado: false
                }],
                finalizado: []
            }
        },
        methods: {
            actualizarEstado(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        computed: {
            tareasHacer() {
                    return this.tareas.filter((t) => !t.completado);
                },
                tareasFin() {
                    return this.tareas.filter((t) => t.completado);
                }
        }
}

</script>
