<style lang="css">

</style>

<template lang="html">

<div class="container">
  <!--Navbar-->
    <nav class="navbar navbar-toggleable-md navbar-dark elegant-color">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                <strong>{Programing}</strong>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Categorias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <router-view></router-view> 
    </main>
    <!--Footer-->
<footer class="page-footer elegant-color center-on-small-only">
  <div class="footer-copyright">
      <div class="container-fluid">
          © 2017 Copyright: <a href="https://www.gitlab.com/adrianverdugo273">Adrian Verdugo</a>
      </div>
    </div>
    <!--/.Footer Links-->
</footer>
</div>
</template>

<script>

export default {}

</script>
