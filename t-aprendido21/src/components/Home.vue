<template>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"></h3>
        </div>
        <div class="panel-body">
              <input type="text" name="" value="" placeholder="Ingresar nombre" v-model='name'>
              <button type="button" name="button" @click='viewUser();'>Buscar nombre</button>
        </div>
        <div class="panel-footer">

        </div>
      </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
            }
        },
        methods: {
            viewUser() {
                this.$router.push(`usuario/${this.name}`)
            }
        }
    }
</script>
