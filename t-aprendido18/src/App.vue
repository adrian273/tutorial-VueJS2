<template lang="html">
<div class="container" style="padding-top:5px;">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a><router-link class="navbar-brand" to='/'> #RUBY Web Page </router-link></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href='#'><router-link to='/' active-class='active-link' exact>Home <span class="sr-only">(current)</span></router-link></a></li>
                    <li><router-link to='/history' active-class='active-link' exact>Historia</router-link></li>
                    <li><router-link to='/examples'>Ejemplos</router-link></li>
                    <li><router-link to='/author'>Autor</router-link></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <div class="container-fluid" style="background-color:white;">
      <div class="jumbotron">
            <router-view></router-view>
      </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .active-link{
        color: red;
    }
</style>
