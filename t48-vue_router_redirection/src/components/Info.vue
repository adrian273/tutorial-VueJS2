<template>
    <section>
          <p>Info {{this.$route.params.ident}}</p>
          <div class="jumbotron">
              <router-view></router-view>
          </div>
    </section>
</template>
