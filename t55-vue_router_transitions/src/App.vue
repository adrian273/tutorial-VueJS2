<template lang="html">
    <main>
        <ul>
            <li v-if="$store.state.auth"><a href="#" @click="changeState">Bloquiar</a></li>
            <li v-else><a href="#" @click="changeState">desbloloquiar</a></li>
        </ul>
        <br>
        <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'crew', params:{ident: 'adrian'}}">Crew</router-link></li>
            <li><a><router-link :to="{name: 'contact'}">Contact</router-link></a></li>
        </ul>
        <h1><i>App's</i></h1>
        <hr>
        <transition name="aparecer" appear>
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { store } from './store'
export default {
    methods: mapMutations(['changeState'])
}
</script>

<style>
    /**
    trancition
    **/

    .aparecer-enter {
        opacity: 0;
    }

    .aparecer-enter-active {
        transition: opacity 1s;
    }

    .aparecer-leave-to {
        opacity: 0;
    }

    .aparecer-leave-active {
        transition: opacity 1s;
    }
    /*
    animation
*/

    .bote-enter-active {
        animation: bounce-in .5s;
    }

    .bote-leave-active {
        animation: bounce-out .5s;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .5s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
