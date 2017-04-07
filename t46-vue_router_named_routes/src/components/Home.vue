<template lang="html">
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Bienvenido</h3>
          </div>
          <div class="panel-body">
              <div class="input-group">
                <span class="input-group-addon">Codigo</span>
                <input type="text" class="form-control" placeholder="" v-model='code'>
              </div>
              <br>
              <button type="button" name="button" class="btn btn-info" @click="search();">Buscar <i class="glyphicon glyphicon-search"></i></button>
          </div>
          <div class="panel-footer">

          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: " ",
        }
    },
    methods: {
        search() {
            this.$router.push(`equipo/${this.code}`);
        }
    }
}
</script>

<style lang="css">
</style>
