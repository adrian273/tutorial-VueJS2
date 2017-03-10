import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        nombre : 'Adrian Andres',
        apellido : 'Verdugo P',
        profesion : ' Web Developer',
        ciudad: 'Talca'
    }
});
