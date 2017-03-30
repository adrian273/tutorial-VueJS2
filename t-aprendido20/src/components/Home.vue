<template lang="html">
    <section>
      <div :class="[$style.card]">
        <h3 class="card-header elegant-color white-text">Ultimos post agregados</h3>
        <div class="card-block">
          <div class="row">
              <div class="col col-md-6" v-for='l in languaje'>
                      <!--Panel-->
                <div :class="[$style.card]">
                  <h3 class="card-header elegant-color white-text">{{l.category}}</h3>
                  <div class="card-block">
                      <h4 class="card-title">{{l.title}}</h4>
                      <p class="card-text">{{l.data_text}}</p>
                      <router-link :to='l.link'><a class="btn elegant-color">Leer</a></router-link>
                  </div>
                </div>
          <!--/.Panel-->
              </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            languaje: [
                {category: 'CoffeScript', title: 'Arrays', data_text: 'Los arrays en Coeffescript se escriben de las siguiente manera', link: 'category/coffee'},
                {category:'Python', title: 'If - else', data_text: '', link: 'category/python'},
                {category: 'Css', title: 'Selectores', data_text: '', link:'category/css'}
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
