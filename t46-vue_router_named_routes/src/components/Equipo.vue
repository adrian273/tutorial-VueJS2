<template lang="html">
    <div class="container">
        <button type="button" name="button" class="btn btn-danger" @click='volver()'><i class="glyphicon glyphicon-arrow-left"></i></button>
        <p>Esto es un equipo { Code: {{this.$route.params.name}} }</p>
        <ul class="nav nav-pills">
            <li role="presentation"><router-link :to="{name: 'bio'}" active-class='active' exact><a href="#">Videos</a></router-link></li>

            <li role="presentation"><router-link :to="{name: 'fotos'}" active-class='active'><a href="#">Fotos</a></router-link></li>

        </ul>
        <div class="">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        volver(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    .active {
        border-bottom: solid 15px #4e7c17;
    }
</style>
