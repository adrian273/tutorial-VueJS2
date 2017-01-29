const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'aprender vue',
            'aprender es6',
            'graffitiar'
        ]
    },
    methods: {
        agregarTarea() {
            // this ase referencia a la instancia Vue
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
})

/**
 *   a lo vanilla 
 */
/*
var agregarTarea = function () {
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);
    input.value = '';
};
*/