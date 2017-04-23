<template>
      <section>
            <p class="text-info">Usuario</p>
            <ul class="nav nav-tabs">
                <li role="presentation"><router-link :to="{name: 'bio'}" active-class="active" exact>Biografia</router-link></li>
                <li role="presentation"><router-link :to="{name:'fotos'}" active-class="active">Fotos</router-link></li>
            </ul>
            <div class="">
                <router-view></router-view>
            </div>
      </section>
</template>

<style scoped>
    .active {
        border: solid 1px;
    }
</style>
