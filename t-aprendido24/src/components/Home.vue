<template lang="html">
    <div class="col-md-12">
        <div class="row" v-for='i in 30'>
        <div v-for="ca in categories" class="col-md-4">
            <div class="card">
                <!--Card image-->
                <img class="img-fluid" :src="ca.img" alt="Card image cap">
                <!--/.Card image-->
                <!--Card content-->
                <div class="card-block">
                    <!--Title-->
                    <h4 class="card-title">{{ca.name}}</h4>
                    <!--Text-->
                    <p class="card-text"> {{ca.content}}</p>
                    <a href="#" class="btn btn-primary" @click.prevent='viewArticle(ca.content)'>Ver</a>
                </div>
                <!--/.Card content-->

            </div>
            <!--/.Card-->
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                categories:[
                    {name: 'CoffeScript', img: 'http://aseemk.com/images/coffeescript-talk/coffeescript-logo.png', content: 'Tutorial de coffescript'},
                    {name: 'Python', img: 'http://bon.co.th/images/technology/python-logo-master.jpg', content: 'Tutotial de python 3.x'},
                    {name: 'vueJs2', img: 'http://timrijkse.nl/images/vue-full-guide.png', content: 'Tutorial de vueJs2'},
                    {name: 'Php', img: 'https://d2sis3lil8ndrq.cloudfront.net/screencasts/050209d3-04f8-4606-b140-e50b376fbcae.png', content: 'Tutorial de PHP7'},
                    {name: 'Codeignter3', img: 'https://i2.wp.com/www.codedrinks.com/wp-content/uploads/2016/03/codeigniter-1.png?fit=700%2C344', content: 'Tutorial Codeignter 3.x'},
                    {name: 'Mysql', img:'http://velozityweb.com/blog/wp-content/uploads/2013/09/mysql-logo900.jpg', content:'Tutorial de mysql'}
                ]
            }
        },
        methods: {
            viewArticle(content){
                alert(content)
            }
        }
    }
</script>