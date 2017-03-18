export const mutations = {
    anadirProductos: (state, producto) => state.productos.unshift(producto),
    comprarProductos: (state, indice) => state.carro.unshift(state.productos[indice]),
    eliminarProductos: (state, indice) => state.carro.splice(indice, 1),
}
