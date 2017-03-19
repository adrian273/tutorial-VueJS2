<template lang="html">
  <section>
      <h1>Rutas con Vue router</h1>
      <router-link to='/'  tag='li' exact><a>Home</a></router-link>
      <router-link to='/contacto' active-class='active' tag='li'><a>Contacto</a></router-link>
      <hr>
      <router-view></router-view>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .active a {
        color: red;
    }

    .router-link-active a {
        color: green;
    }

</style>
