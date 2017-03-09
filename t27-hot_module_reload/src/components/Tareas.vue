<style lang="css">

li a {
    color: orange;
    font-weight: bold;
    list-style-position: outside;
    text-decoration: none;
}

</style>

<template lang="html">

<div class="">
    <h2>Tareas para realizar</h2>
    <ul>
        <li v-for="tarea in tareasPendientes">
            <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
        </li>
    </ul>
    <h2>Tareas finalizadas</h2>
    <ul>
        <li v-for="tarea in taresFinalizadas">
            <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>

        </li>
    </ul>
</div>

</template>

<script>

export default {
    data() {
            return {
                tareas: [{
                    nombre: 'aprender vue js',
                    completado: false
                }, {
                    nombre: 'aprender ES6',
                    completado: false
                }, {
                    nombre: 'aprender firebase',
                    completado: false
                }],
                fializadas: []
            }
        },
        methods: {
            actualizarTarea(t) {
                    t.completado = !t.completado;
                },

        },
        computed: {
            tareasPendientes() {
                    return this.tareas.filter((t) => !t.completado);
                },
                taresFinalizadas() {
                    return this.tareas.filter((t) => t.completado);
                },

        }
}

</script>
