<template>
    <section>
        <ul class="nav nav-tabs">
            <li role="presentation"><router-link :to="{name: 'bio'}" exact><a>Biografia</a></router-link></li>
            <li role="presentation"><router-link :to="{name: 'fotos'}"><a>Fotos</a></router-link></li>
            <li role="presentation"><router-link :to="{name: 'friends'}"><a>Amigos</a></router-link></li>
        </ul>
        <div class="">
            <router-view></router-view>
        </div>
        <pre v-text="username"></pre>
    </section>
</template>

<script>
    export default {
        data(){
          return {
              username: null
          }
        },
        created(){
            // fetch the data when the view is created and the data is
            // already being observed
            this.obtenerUsername();
        },
        watch: {
            // call again the method if route changes
            '$route': 'obtenerUsername'
        },
        methods: {
            obtenerUsername(){
                setTimeout(() => {
                    this.username = this.$route.params.ident + Math.floor(Math.random() * 1000);
                }, 2000);
            }
        }
    }
</script>

<style>
    .router-link-active a {
        color: green;
        border-bottom:  solid 3px;
    }
</style>
