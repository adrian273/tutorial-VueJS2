Vue.component('author', {
    props: ['nombre', 'edad'],
    mounted() {
        //las props son accesibles desde THIS
        //console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template: `<div><h1>{{name}}</h1><button @click="cambiarProp">Cambiar a mayusculas</button></div>`,
    methods: {
        cambiarProp() {
            this.name = this.name.toUpperCase();
        }
    },
    data() {
        return {
            name: this.nombre
        }
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        autor: 'adrian verdugo'
    }
});
