Vue.component("lista-tareas", {
    template: "#tareas-template",
    data() {
        return {
            tareas: ['finalizar sección de componentes', 'praticar lo aprendido']
        }
    }
});

Vue.component("tarea", {
    props: ['tarea'],
    template: `<li>{{tarea}}</li>`
});

Vue.component("contacto", {
    template: `<p>Email : adrianverdugo273@gmail.com</p>`
});

Vue.component("bio", {
    template: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
});

const vm01 = new Vue({
    el: 'main',
    data: {
        selecccionado: 'lista-tareas'
    }
});
