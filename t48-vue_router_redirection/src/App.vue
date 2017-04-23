<template>
      <main>
            <div class="container">
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
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#"></a></li>

                      </ul>
                      <form class="navbar-form navbar-left" role="search" v-on:submit.prevent="userSearch()">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search" v-model="data_user">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                      </form>
                      <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"></a></li>

                      </ul>
                    </div><!-- /.navbar-collapse -->
                  </div><!-- /.container-fluid -->
                </nav>
                <div class="jumbotron">
                    <router-view></router-view>
                </div>
                <div class="">
                      {{$data}}
                </div>
            </div>
      </main>
</template>

<script>
    export default {
        data(){
            return {
                data_user: ""
            }
        },
        methods: {
            userSearch() {
                this.$router.push(`/info/${this.data_user}`)
            }
        }
    }
</script>
