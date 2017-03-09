<style lang="css">



</style>
<!--
<template lang="html">

<div class="">
    <section v-if="tipo === 'section'">
        <slot></slot>
    </section>
    <aside class="" v-if="tipo === 'aside'">
        <slot></slot>
    </aside>
</div>

</template>
-->

<script>

export default {
    props: ['tipo'],
    render(createdElement) {
        return createdElement (
          this.tipo,
          this.$slots.default,
        )
    }
}

</script>
