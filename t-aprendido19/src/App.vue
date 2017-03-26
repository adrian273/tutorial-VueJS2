<template lang="pug">
    div(class='container')
        div
            nav(class="navbar navbar-inverse" role="navigation")
              div(class='container')
                div(class='navbar-header')
                  ul(class='nav navbar-nav lista-white')
                      li()
                          router-link(to='/' active-class='active-link' exact)
                              a home
                      li
                          router-link(to='/user' active-class='active-link' )
                              a User
        div
            router-view
</template>

<script>
export default {
}
</script>

<style lang="css">
    .lista-white a {
      color: white;
    }
    .active-link a {
        color: red;
    }
</style>
