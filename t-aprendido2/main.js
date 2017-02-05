var rankingRange;
const vm = new Vue({
    el: 'main',
    data: {
        rank: 5,
        juegos: [
            {
                nombre: "gta5", puntuacion: 10, genero: 'accion'
            },
            {
                nombre: "naruto", puntuacion: 7, genero: 'aventura'
            }
        ]
    },
    methods:{
        capitalizeBtn(){
            return this.juegos.filter((j) => j.nombre.toUpperCase());
        }
    },
    computed:{
        rankingRange(){
            return this.juegos.filter((j) => j.puntuacion >= this.rank);
        }

    }
});