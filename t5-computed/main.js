const vm = new Vue({
    el: "main",
    data: {
        mensaje: "Hello Word!",
        tareas: [
            { nombre: 'hacer las tareas', prioridad: false, antiguedad: 30 },
            { nombre: 'aprender vue y firefabase', prioridad: false, antiguedad: 25 },
            { nombre: 'jugar play', prioridad: true, antiguedad: 15 }
        ]
    },
    // es distinto metodos con computed
    computed: {
        verMensajeAlreves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPoAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});