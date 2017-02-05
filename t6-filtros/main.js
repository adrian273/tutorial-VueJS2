const vm = new Vue({
    el: 'main',
    data: {
        minimo: 5,
        busqueda: '',
        juegos: [
            {
                titulo: 'dragon age',
                genero: ' rpg',
                puntuacion: 8
            },
            {
                titulo: 'naruto ninja storm 3',
                genero: 'peleas',
                puntuacion: 7
            },
            {
                titulo: 'gt5',
                genero: 'accion',
                puntuacion: 6
            }
        ]
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((j) => j.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((j) => j.titulo.includes(this.busqueda));
        }
    }
});