<template lang="html">
    <section>
      <div class="row">
          <div class="col col-md-6" v-for='d_c in data_category' v-if='type'>
                  <!--Panel-->
            <div :class="[$style.card]" v-if='d_c.type === "coffee"'>
              <h3 class="card-header elegant-color white-text"></h3>
              <div class="card-block">
                  <h4 class="card-title">{{d_c.title}}</h4>
                  <p class="card-text">{{d_c.content}}</p>
                <a class="btn elegant-color">Leer</a>
              </div>
            </div>
      <!--/.Panel-->
      <!--Panel-->
          <div :class="[$style.card]" v-else='d_c.type === "python"'>
            <h3 class="card-header elegant-color white-text"></h3>
            <div class="card-block">
                <h4 class="card-title">{{d_c.title}}</h4>
                <p class="card-text">{{d_c.content}}</p>
              <a class="btn elegant-color">Leer</a>
            </div>
          </div>
        <!--/.Panel-->
          </div>
      </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            type: this.$route.params.type,
            data_category: [
                {title: 'Arrays', content: 'Esto es un ejemplo de arrays', type: 'coffee'},
                {title: 'Funciones', content: 'Esto es un ejemplo de funciones', type: 'python'}
            ]
        }
    }
}
</script>

<style lang="css" module>
  .card {
      padding-top: 5px;
  }
</style>
