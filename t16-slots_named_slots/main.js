/**
 * Slot : es un punto en el template que se puede modificar asignar el propio contenido
 * Slot anonimos pueden aver solo 1 : <slot></slot>
 */


Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `<section class="alerta" :class="[tipo, posicion]"><header class="alerta_header"><slot name="header">Hola Adrian</slot></header><div class="alerta_contenido"><slot>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</slot></div><footer class="alerta_footer"><slot name="footer">Texto del footer</slot></footer></section>`
});

new Vue({
    el: 'main'
});
