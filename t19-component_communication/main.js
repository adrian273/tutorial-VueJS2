// para crear un puebnte en la instancia, y no pasar por la instancia principal
const eventBus = new Vue();


Vue.component("listado-productos", {
    props: ['producto'],
    template: "#productos-template",
    methods: {
        anadirProducto(precio) {
            eventBus.$emit("anadir", precio);
        },
        eliminarProducto(precio) {
            eventBus.$emit("eliminar", precio);
        },
    }
});

Vue.component("carrito-compra", {
    template: "#carrito-compra-template",
    data() {
        return {
            cantidadProductos: 0,
            total: 0
        }
    },
    created() {
        eventBus.$on("anadir", (precio) => {
            if (this.total >= 0) {
                this.total += precio;
                this.cantidadProductos++;
            }

        });
        eventBus.$on("eliminar", (precio) => {
            if (this.total > 0) {
                this.total -= precio;
                this.cantidadProductos--;
            }
        });
    }
});

const title = new Vue({
    el: 'title',
    data: {
        title_index: "Components_comunication"
    }
});

new Vue({
    el: 'main',
    data: {
        productos: [{
                nombre: "Libro ES6",
                precio: 100
            },
            {
                nombre: "Libro CoffeScript",
                precio: 200
            },
            {
                nombre: "Libro Python",
                precio: 300
            }
        ]
    }
});
