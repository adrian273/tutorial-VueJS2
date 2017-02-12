
const vm = new Vue({
    el: 'main',
    // cuando la instancia esta lista
    mounted() {
        console.log("Instancia montada");
        this.cargarPersona();
    },
    data: {
        // para rellenar la matriz
        personas: [],
    },
    methods: {
        cargarPersona() {
            // VUE RESOURCE
            /*
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                });
            */

            // AXIOS
            axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                });
        }
    }
});