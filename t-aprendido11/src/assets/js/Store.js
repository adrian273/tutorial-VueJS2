import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contador : 0
    },
    mutations: {
        aumentar: (state) => state.contador++,
        reducir: (state) => state.contador--,
    }
});
