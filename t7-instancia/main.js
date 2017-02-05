const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'instancia',

    },
    beforeUpdate(){
        console.log("Beforeupdate", this.mensaje);
    },
    updated(){
        console.log("update", this.mensaje);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
            //vm2.mensaje = 'esto es de la instancia 2';
        }
    },
    computed: {
        mensajeMayuscula() {
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: "instancia 2"
    }
});