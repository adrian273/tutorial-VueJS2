<template>
    <main>
         <!--Navbar-->
    <nav class="navbar navbar-toggleable-md navbar-dark purple darken-4 fixed-top">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapseEx2" aria-controls="collapseEx2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                <strong>Adrian Verdugo</strong>
            </a>
            <div class="collapse navbar-collapse" id="collapseEx2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'contact'}"><a class="nav-link">Contacto</a></router-link>
                    </li>
                    <li class="nav-item btn-group">
                        <a class="nav-link dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <a class="dropdown-item">Html5</a>
                            <a class="dropdown-item">Python</a>
                            <a class="dropdown-item">CoffeeScript</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline waves-effect waves-light">
                    <input class="form-control" type="text" placeholder="Search" v-model='search'>
                </form>
            </div>
        </div>
    </nav>
    <div style="padding-top: 60px;">
         <router-view></router-view>
    </div>
    <!--/.Navbar-->
    </main>
</template>

<script>
    export default{
        data(){
            return{
                search: ''
            }
        }
    }
</script>