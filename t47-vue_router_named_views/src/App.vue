<template lang="html">
    <main>
          <div class="container">
              <nav class="navbar navbar-inverse" role="navigation">
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
                      <li class="active"><a href="#">Home</a></li>
                      <li><a href="#"></a></li>

                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                      <li><a href="#"></a></li>

                    </ul>
                  </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
              </nav>
              <div class="">
                  <router-view></router-view>
              </div>
          </div>
    </main>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
