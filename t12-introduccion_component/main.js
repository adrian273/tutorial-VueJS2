Vue.component('mis-tareas', {
    // origen del componente
    props: ['tareas'],
    // vista que se mostrara
    template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
    mounted() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    data() {
        return {
            tareas: []
        }
    }
});

const vm = new Vue({
    el: 'main',
    /*
    mounted() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas_ajax = respuesta.data;
            });
    },
    data: {
        tareas_ajax: [],
        tareas_locales: [
            { title: 'hola' },
            { title: 'adrian' },
            { title: 'kdrs' }
        ]
    }
    */
});