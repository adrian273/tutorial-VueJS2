<template>
    <div>
        <div>
            <ul id="links">
                <li><a href="">
                        <router-link :to="{name: 'home'}">Home</router-link>
                    </a></li>
                <li><a href="">
                        <router-link :to="{name: 'contact'}">Contacto</router-link>
                    </a></li>
                <li><a href="">
                        <router-link :to="{name: 'bio', params: {'id': 'test'}}">Biografia</router-link>
                    </a></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>