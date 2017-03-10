import Vue from 'vue';
import Vuex from 'vuex';

// le decimos que utilize VUEX
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        // replicado el nombre de propiedad de component principal
        cantidad: 0
    }
});
