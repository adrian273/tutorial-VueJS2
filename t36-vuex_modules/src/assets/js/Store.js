import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/Productos';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
      /*
        productos : [
            {nombre : 'Libro Python 2.7', precio : 25000},
            {nombre : 'Libro CoffeScript', precio : 20000},
            {nombre : 'Libro Vuejs2', precio : 18000}
        ],*/
        carro : []
    },
    getters : {
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
    },
    mutations : {
        //anadirProductos: (state, producto) => state.productos.unshift(producto),
        comprarProductos: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProductos: (state, indice) => state.carro.splice(indice, 1),
    },
    modules: {
        productos
    }
});
