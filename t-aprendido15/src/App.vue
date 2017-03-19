<template lang="html">
    <div class="container-fluid">
      <nav class="navbar navbar-default" role="navigation">
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
              <li><router-link to='/' active-class='activate' exact>Home</router-link></li>
              <li><router-link to='/blog' active-class='activate'>Blog</router-link></li>
              <li><router-link to='/contacto' active-class='activate'>Contacto</router-link></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      <main>
          <router-view></router-view>
      </main>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .activate {
      color: #555;
      cursor: default;
      background-color: #fff;
      border: 1px solid #da0000;
      border-bottom-color: transparent;
    }
</style>
