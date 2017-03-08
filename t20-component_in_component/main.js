Vue.component("lista-tareas", {
    props: ['tareas'],
    template: "#tareas-template"
});

Vue.component("tarea", {
    props: ['tarea'],
    template: `<li>{{tarea}}</li>`
});

const vm01 = new Vue({
    el: 'main',
    data: {
        tareas: ['finalizar sección de componentes', 'praticar lo aprendido']
    }
});
