Vue.component('candidato', {
    /**
     * [props en MATRIZ]
     * @type {Array}
      props: ['nombre', 'correo', 'imagen'],
      template: '#candidato-template'
      */
    //props en objeto
    props: {
        nombre: {
            type: String, // null es de cualquier tipo (*)
            required: true // para que sea requiredo
        },
        correo: {
            type: String,
            default: 'adrianverdugo273@gmail.com'
        },
        imagen: String,
        location: {
            type: Object,
            default () {
                return {
                    ciudad: 'talca'
                }
            }
        },
    },
    template: "#candidato-template"
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=10')
                .then((response) => {
                    this.candidatos = response.data.results;
                });
        }
    }
});
