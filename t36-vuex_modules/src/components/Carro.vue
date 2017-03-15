<template lang="pug">
    section
          h2 Carro de Compras
          h3 Total de la compra: $ {{totalCompra}}
          ul
              li(v-for='(productos, indice) in carro') {{productos.nombre}}
                  button(@click='eliminarProductos(indice)') X
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['carro']),
        ...mapGetters(['totalCompra'])
    },
    methods: {
        ...mapMutations(['eliminarProductos'])
    }
}
</script>

<style lang="css">
</style>
