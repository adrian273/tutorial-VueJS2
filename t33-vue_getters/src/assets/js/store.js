import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        tareas: [
            {nombre : 'Aprender vue routing', completado : false},
            {nombre : 'Apreder Laravel 5.4(php 7)', completado : false},
            {nombre : 'Apreder ES6', completado : false}
        ]
    },
    getters: {
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => {
                return tarea.completado;
            }).length;
        }
    }
});
