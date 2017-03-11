<template lang="html">
    <div class="">
        <h1>Contador : {{cantidad}}</h1>
        <button type="button" name="button" :class="[$style.info]" @click="aumentar">Aumentar +</button>
        <button type="button" name="button" :class="[$style.danger]" @click="reducir">Reducir -</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: mapState(['cantidad']),
    methods: mapMutations(['aumentar', 'reducir']),
    /*methods: {
        aumentar() {
            //this.$store.state.cantidad++;
            //para llamar la mutación
            if(this.$store.state.cantidad >= 0){
                this.$store.commit('aumentar');
            }
        },
        disminuir() {
            //this.$store.state.cantidad--;
            //para llamar la mutación
            if(this.$store.state.cantidad > 0){
                this.$store.commit('reducir');
            }
        }
    }*/
}
</script>

<style  module>
    .info {
        background-color: blue;
        color: white;
        border-radius: 15px;
    }
    .danger {
      background-color: red;
      color: white;
      border-radius: 15px;
    }
</style>
