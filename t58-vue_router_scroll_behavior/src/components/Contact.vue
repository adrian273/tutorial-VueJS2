<template>
    <div>
        <div class="jumbotron">
            <h1>Contacto: </h1>
            <p>adrianverdugo273@gmail.com</p>
            <pre>{{ numero }}</pre>
        </div>
        <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p id='parrafo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam illo! Sapiente sunt neque quam porro hic magnam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, doloribus, ad assumenda totam pariatur tempore at recusandae temporibus quos ipsam cum ullam </p>
        </article>
    </div>
    
</template>

<script>
    export default{
        data(){
            return{
                numero: null
            }
        },
        beforeRouteEnter: ((to, from ,next) => {
            console.info('antes de entrar')
            setTimeout(() => {
                // this no va a funcionar porque no esta cargado. se utiliza un vm
                next((vm) => {
                    vm.numero = Math.floor(Math.random() * 1000);
                })
            }, 1000)
        })
    }
</script>

<style>
    article {
        width: 1000px;
    }
    p {
        width: 400px;
    }
    #parrafo {
        color: red;
    }
</style>