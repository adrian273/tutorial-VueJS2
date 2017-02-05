const vm = new Vue({
    el: 'main',
    data: {
        tareas: [{
                titulo: "estuiar vuejs",
                realizado: false
            },
            {
                titulo: "apender firebase",
                realizado: true
            },
            {
                titulo: "dominar es6",
                realizado: false
            }
        ]
    },
    methods: {
        completarTarea(tarea) {
            /**
             * [realizado description]
             * cambia al contrario del valor
             * @type {[boolean]}
             */
            tarea.realizado = !tarea.realizado;
        }
    },
    computed: {
        tareasCompletadas() {
            /**
             * filtar el relaizado para sacar el largo de los  ellos
             */
            return this.tareas.filter((j) => j.realizado);
        }
    }
});
