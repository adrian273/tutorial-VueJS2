<template lang="html">
    <div class="">
        <h1>{{cantidad}}</h1>
        <button type="button" name="button" @click="aumentar">+</button>
        <button type="button" name="button" @click="reducir">-</button>
    </div>
</template>

<script>
export default {
    methods:{
        aumentar(){
            //this.$emit('aumentar');
            this.$store.state.cantidad++;
        },
        reducir(){
            this.$store.state.cantidad--;
        }
    },
    computed : {
        cantidad(){
            return this.$store.state.cantidad;
        }
    }
}
</script>
