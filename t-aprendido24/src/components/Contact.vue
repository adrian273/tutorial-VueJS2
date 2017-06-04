<template>
    <div class="col-md-12">
         <!--Card-->
    <div class="card">

        <!--Card image-->
        <div class="view overlay hm-white-slight">
            <img src="http://timrijkse.nl/images/vue-full-guide.png" class="img-fluid" alt="">
            <a>
                <div class="mask waves-effect waves-light"></div>
            </a>
        </div>
        <!--/.Card image-->

        <!--Card content-->
        <div class="card-block">
            <!--Title-->
            <h4 class="card-title">Contacto:   <b>adrianverdugo273@gmail.com</b></h4>
            <!--Text-->
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, eligendi molestias quod laudantium quo veritatis suscipit accusantium maxime, ut quibusdam, fuga debitis officia perferendis soluta amet obcaecati doloribus. Adipisci, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima deserunt eaque veniam tempora, mollitia accusantium ut inventore similique nesciunt vitae veritatis ipsa odit deleniti obcaecati eveniet adipisci ducimus suscipit harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, provident ullam repellendus tempora a quo cum cupiditate, aut excepturi ratione obcaecati totam enim, odit dolore iste. Nobis dignissimos vitae, magni.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, eligendi molestias quod laudantium quo veritatis suscipit accusantium maxime, ut quibusdam, fuga debitis officia perferendis soluta amet obcaecati doloribus. Adipisci, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima deserunt eaque veniam tempora, mollitia accusantium ut inventore similique nesciunt vitae veritatis ipsa odit deleniti obcaecati eveniet adipisci ducimus suscipit harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, provident ullam repellendus tempora a quo cum cupiditate, aut excepturi ratione obcaecati totam enim, odit dolore iste. Nobis dignissimos vitae, magni.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, eligendi molestias quod laudantium quo veritatis suscipit accusantium maxime, ut quibusdam, fuga debitis officia perferendis soluta amet obcaecati doloribus. Adipisci, expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima deserunt eaque veniam tempora, mollitia accusantium ut inventore similique nesciunt vitae veritatis ipsa odit deleniti obcaecati eveniet adipisci ducimus suscipit harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, provident ullam repellendus tempora a quo cum cupiditate, aut excepturi ratione obcaecati totam enim, odit dolore iste. Nobis dignissimos vitae, magni.
            </p>
            <a class="btn btn-primary" @click='send'>Contactar</a>
        </div>
        <!--/.Card content-->

    </div>
    <!--/.Card-->
    </div>
   
</template>

<script>
    export default{
        methods: {
            send(){
                alert('Contactando...')
            }
        }
    }
</script>