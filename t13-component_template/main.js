Vue.component('winner', {
    props: ['listado'],
    template: "#winner-random",
    /*
     *** Esta es una forma dse hacerlo pero es mas desordenada ***
    template: '<div><h1 v-if="ganador">El gandor es :{{ganador}}</h1><template v-else><h1>Participantes</h1><ul><li v-for="p in listado">{{p}}</li></ul></template><button @click="elegirGanador()">elegir ganador</button></div>',
    */
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    }
});
/**
 *  instancia
 */
new Vue({
    el: 'main',
    data: {
        personas: [
            'juan', 'alice', 'peter', 'adrian', 'andres'
        ]
    }
});
