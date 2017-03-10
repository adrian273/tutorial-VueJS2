import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        name : "Adrian",
        surname: "Verdugo",
        hoobys: "Pintar",
        age: "22"
    }
});
