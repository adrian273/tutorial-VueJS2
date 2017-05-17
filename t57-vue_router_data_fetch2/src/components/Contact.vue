<template>
    <div class="jumbotron">
      <h1>Contacto: </h1>
      <p>adrianverdugo273@gmail.com</p>
      <pre>{{ numero }}</pre>
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
            }, 2000)
        })
    }
</script>
