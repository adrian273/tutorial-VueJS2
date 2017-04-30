<template lang="html">
    <section>
        <p>identificacion crew: {{ ident }}</p>
        <router-view></router-view>
        <router-view name="bio"></router-view>
    </section>
</template>

<script>
export default {
    props: ['ident'],
}
</script>

<style lang="css">
</style>
