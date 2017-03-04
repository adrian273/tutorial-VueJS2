/**
 * basado en el archivo slot & named slots (tutorial numero 16)
 */


Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `<section class="alerta" :class="[tipo, posicion]"><header class="alerta_header"><slot name="header">Hola Adrian</slot><a href="#" title="Cerrar Alerta" @click="ocultar">[x]</a></header><div class="alerta_contenido"><slot>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</slot></div><footer class="alerta_footer"><slot name="footer">Texto del footer</slot></footer></section>`,
    methods: {
        ocultar() {
            // para crear custom event
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false
    }
});
