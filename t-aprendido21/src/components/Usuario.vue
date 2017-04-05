<template>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Usuario {{this.$route.params.name}}</h3>
      </div>
      <div class="panel-body">
        <ul class="nav nav-tabs">
            <li role="presentation"><router-link :to="'/usuario/'+ this.$route.params.name+'/'" exact active-class='active'><a>Biografia</a></router-link></li>
            <li role="presentation"><router-link :to="'/usuario/'+ this.$route.params.name+'/fotos'" active-class='active'>Fotos</router-link></li>
        </ul>
        <div class="">
            <router-view></router-view>
        </div>
      </div>
      <div class="panel-footer">

      </div>
    </div>
</template>

<style scoped>
    .active {
        border: thick dotted #0018b5;
    }
</style>
