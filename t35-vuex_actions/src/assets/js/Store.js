import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contador : 0
    },
    mutations: {
        aumentar: (state, cantidad) => state.contador += cantidad,
        reducir: (state, cantidad) => state.contador -= cantidad,
    },
    actions: {
        // aca vess de #state esta #contex
        // primera forma de hacerlo
        aumentarAsinc: (context, cantidad) => {
            setTimeout( () => context.commit('aumentar', cantidad), 2000);
        },
        reducirAsinc: ({commit}, {cantidad}) => {
            setTimeout( () => commit('reducir', cantidad), 2000);
        }
    }
});
