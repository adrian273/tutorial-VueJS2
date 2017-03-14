<template lang="pug">
    section
          h1 Añadir un producto
          form(@submit.prevent='anadir')
                input(type='text' placeholder='Nombre' v-model='nombre' required)
                input(type='text' placeholder='Precio' v-model='precio' required v-bind:class='[$style.form_input]')
                button(type='submit' v-bind:class='[$style.btn, $style.btn_info]') Agregar
          hr
          ul
              li(v-for='(producto, indice) in productos') {{producto.nombre}} - {{producto.precio.toFixed(2) + '$'}}
                  button( @click='comprarProductos(indice)') +
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            nombre: '',
            precio:0,
        }
    },
    computed: mapState(['productos']),
    methods: {
        ...mapMutations(['comprarProductos']),
        anadir() {
            this.$store.commit('anadirProductos', {
                nombre: this.nombre,
                precio: Number(this.precio)
            });
            this.nombre  = '',
            this.precio = 0
        }
  },
}
</script>

<style lang="css" module>
    .btn {
        border-radius: 15px;
    }
    .btn_info {
        background-color: #78DBD4;
        color: #ffffff;
    }
    .form_input {
        margin-left: 15px;
    }
</style>
