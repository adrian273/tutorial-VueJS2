let busIntans = new Vue();

Vue.component("book", {
    props: ['book_data'],
    template: "#book-template",
    methods: {
        addNewItem(price) {
            busIntans.$emit("addNewItem", price);
        },
        deleteItem(price) {
            busIntans.$emit("deleteItem", price);
        }
    }
});

Vue.component("cart-shop", {
    template: "#cart-shop-template",
    data() {
        return {
            quantify: 0,
            total: 0,
        }
    },
    created() {
        busIntans.$on("addNewItem", (price) => {
            if (this.quantify >= 0) {
                this.total += price;
                this.quantify++;
            }
        });
        busIntans.$on("deleteItem", (price) => {
            if (this.quantify > 0) {
                this.total -= price;
                this.quantify--;
            }
        });
    }
});

const primary_vm = new Vue({
    el: 'main',
    data: {
        books: [{
                title: "Games of trones",
                gender: "Fantasia",
                price: 60000,
                quantify_book: 0
            },
            {
                title: "Python 3",
                gender: "Programación",
                price: 35000,
                quantify_book: 0
            },
            {
                title: "CoffeScript",
                gender: "Programación",
                price: 45000,
                quantify_book: 0
            },
            {
                title: "Javascript",
                gender: "Programación",
                price: 32000,
                quantify_book: 0
            }
        ]
    }
});
