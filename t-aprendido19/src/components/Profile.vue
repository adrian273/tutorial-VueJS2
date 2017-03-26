<template lang="pug">
    section
          p Nombre: {{ name }}
          p codigo: {{ ident }}
          ul(v-if='send')
              li {{codigo}}
</template>

<script>
export default {
    data() {
        return {
            send: true,
            ident: this.$route.params.id,
            name: this.$route.params.name,
        }
    },
    watch: {
        '$route'(to){
            this.ident = to.params.id;
            this.name = to.params.name;
        }
    }
}
</script>

<style lang="css">
</style>
