<template lang="html">
  <div class="container-fluid">
    <div class="row">
        <nav class="navbar" role="navigation">
        </nav>
        <div class="col-md-3 col-lg-3">
          <div class="container-fluid">
              <ul class="nav nav-pills nav-stacked">
                  <li role="presentation"><router-link active-class='active-link' to='/' exact>Home</router-link></li>
                  <li role="presentation"><router-link to='/contacto' active-class='active-link' >Contacto</router-link></li>
              </ul>
          </div>
        </div>
        <div class="col-md-9 col-lg-9">
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
