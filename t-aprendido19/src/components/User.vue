<template lang="pug">
    section
          div(class='panel panel-danger')
              div(class='panel-heading')
                  h3(class='panel-title') Usuario
              div(class='panel-body')
                  button(class='btn btn-primary' @click='viewUser()') ver usuario
                  router-view
              div(class='panel-footer')
                  p &reg; Adrian Verdugo 2017
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        viewUser() {
            const ident = prompt('Ingresa tu codigo');
            const name = prompt("¿Cual es tu nombre ?");
            if(name){
                this.$router.push(`user/profile/${ident}/${name}`);
            }
        }
    },

}
</script>

<style lang="css">
</style>
