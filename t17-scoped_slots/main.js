Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template'
});

new Vue({
    el: 'main',
    data: {
        tareas: [{
                title: "Programar"
            },
            {
                title: "salir a pagar cuentas"
            },
            {
                title: "ir al asado"
            },
            {
                title: "seguir estudianbdo"
            }
        ]
    }
});
