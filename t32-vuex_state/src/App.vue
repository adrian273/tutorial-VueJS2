

<template lang="html">
    <div class="">
      <h1>nombre : {{nombre}}</h1>
      <h2>apellido : {{apellido}}</h2>
      <h3>Profesion : {{profesion}}</h3>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    /*
      computed : {
          nombre(){
              return this.$store.state.nombre;
          }
      }

    computed: mapState({
      // 3 formas para retornar el valor , de la 2 es ES6;
        /*nombre: function (state){
            return state.nombre;
        }
        nombre : (state) => {
            return state.nombre;
        }
        nombre: (state) => state.nombre,
        apellido: (state) => state.apellido,
    })
    */
   computed : mapState(['nombre', 'apellido', 'profesion']),
}

</script>
