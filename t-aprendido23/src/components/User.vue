<template>
    <section>
        <ul class="nav nav-tabs">
            <li role="presentation"><router-link :to="{name: 'bio'}" exact><a>Biografia</a></router-link></li>
            <li role="presentation"><router-link :to="{name: 'fotos'}"><a>Fotos</a></router-link></li>
            <li role="presentation"><router-link :to="{name: 'friends'}"><a>Amigos</a></router-link></li>
        </ul>
        <div class="">
            <router-view></router-view>
        </div>
    </section>
</template>

<style>
    .router-link-active a {
        color: green;
        border-bottom:  solid 3px;
    }
</style>
