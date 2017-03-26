<template lang="html">
    <section>
        <p>User : {{id}}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.ident,
        }
    },
    watch: {
        '$route'(to){
            this.id = to.params.ident;
        }
    }
}
</script>

<style lang="css">
</style>
