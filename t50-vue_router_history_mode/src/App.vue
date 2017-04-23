<template>
    <main>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'contact'}"><a>[Contact]</a></router-link>
        <router-view></router-view>
    </main>
</template>
