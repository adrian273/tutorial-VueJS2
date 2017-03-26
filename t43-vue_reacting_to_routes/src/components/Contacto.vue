<template lang="html">
    <section>
        <p>Contacto</p>
        <button type="button" name="button" :class="[$style.blues]" @click='userView()'>Ir a usuario</button>
    </section>
</template>

<script>
export default {
    methods: {
        userView() {
          this.$router.push('/usuario/7895');
        }
    }
}
</script>

<style lang="css" module>
    .blues {
        color: white;
        background-color: blue;
        border-radius: 15px;
    }
</style>
