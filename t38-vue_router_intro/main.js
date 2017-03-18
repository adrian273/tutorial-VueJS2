const home = Vue.component("Home", {
    template: '<h1>Home</h1>'
});

const contacto = Vue.component("Contacto", {
    template: "<h2>Contacto</h2>"
});

// Plano de destino con subrutas
/**
 * [routes description]
 * @type {ruta/conponent} ejemplo ->
 * @description {path: '/', components: components}
 */
const routes = [
    {path: '/', component: home},
    {path: '/Contacto', component: contacto}
]
// instancia del router
const router = new VueRouter({
    routes,
})
const vm = new Vue({
    router,
    el: 'main'
});
