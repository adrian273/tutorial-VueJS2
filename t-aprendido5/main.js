let vm02 = new Vue();

Vue.component("game", {
    props: ['info_game'],
    template: '#dataGame-template',
    methods: {
        addNewGame(price) {
            vm02.$emit("addNewGame", price);
        },
        deleteAddGame(price) {
            vm02.$emit("deleteAddGame", price);
        }
    }
});

Vue.component("cart-shop", {
    template: "#cart-shop-template",
    data() {
        return {
            quantity: 0,
            total: 0
        }
    },
    created() {
        vm02.$on("addNewGame", (price) => {
            if (this.quantity >= 0) {
                this.total += price;
                this.quantity++;
            }
        });
        vm02.$on("deleteAddGame", (price) => {
            if (this.quantity) {
                this.total -= price;
                this.quantity--;
            }
        });
    }

});

const vm1 = new Vue({
    el: 'main',
    data: {
        data_game: [{
                name: "Dragon age",
                price: 35000,
                gender: "rpg",
                cantidad: 0
            },
            {
                name: "Final Fantasy",
                price: 45000,
                gender: "jrpg",
                cantidad: 0
            }
        ]
    }
});
