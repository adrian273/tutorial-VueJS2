<template>
    <section>
        <h1 class="text-center text-info">Amigos</h1>
        <div class="row">
            <div class="col-md-12" style="padding-bottom:15px">
                <input type="text" name="" value="" placeholder="Busqueda" class="form-control" v-model="search_user"> {{search_user}}
            </div>
            <div class="col-md-3" v-for="d in search_user_data">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title text-info">{{d.name.first}} {{d.name.last}}</h3>
                  </div>
                  <div class="panel-body">
                      <img :src="d.picture.large" alt="" class="img-responsive">
                  </div>
                  <div class="panel-footer">
                      <p v-text="d.email"></p>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            data_user: [],
            search_user: ""
        }
    },
    mounted(){
        this.loadFriends()
    },
    methods: {
        loadFriends(){
            this.$http.get('https://randomuser.me/api/?results=8')
                .then((response) => {
                      this.data_user = response.data.results
                })
        },
    },
    computed: {
        search_user_data(){
            return this.data_user.filter((s) => s.name.first.includes(this.search_user))
        }
    }
}
</script>

<style lang="css">
</style>
