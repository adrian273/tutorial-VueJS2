<template lang="html">
    <main>
      <div class="container">
          <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"></a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav">
                  <li class="active"><router-link :to="{name: 'home'}">Home</router-link></li>
                  <li><router-link :to="{name: 'crew', params: {ident: 'kdr'} }">Crew</router-link></li>
                  <li><router-link :to="{name: 'contact', hash: '#parrafo'}">Contacto</router-link></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                  <li v-if="$store.state.auth"><a href="#" @click="changeState">bloquiar <i class="glyphicon glyphicon-lock"></i></a></li>
                  <li v-else><a href="#" @click="changeState">desbloquiar <i class="glyphicon glyphicon-ok"></i></a></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>
      </div>
      <div class="container" style="padding-top:90px;">
          <router-view></router-view>
      </div>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { store } from './store'
export default {
    methods: mapMutations(['changeState']),
}
</script>

<style>
    .color_nav_style_new {
        background-color: #4d088e;
        color: #f7feff;
    }
</style>
