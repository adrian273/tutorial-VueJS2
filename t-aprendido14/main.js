const home = Vue.component('Home', {
    template: `<p>Home</p>`
});

const contacto = Vue.component('Contacto', {
    template: `<label>Contacto</label>`
});

const routes = [
    {path: '/', component: home},
    {path: '/contacto', component: contacto},
]

const router = new VueRouter({
    routes,
});

new Vue({
    router,
    el: 'main',
})
