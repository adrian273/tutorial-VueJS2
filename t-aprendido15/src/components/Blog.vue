<template>
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">Blog</h3>
      </div>
      <div class="panel-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="panel-footer">
          Blog de la comunidad::. {{name}}
          <input type="text" name="name" value="" class="form-control" v-model="dato">
          <label for="">Probando models : {{dato}}</label>
      </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name: 'Adrian Verdugo',
                dato: ''
            }
        }
    }
</script>
