<template lang="html">
    <section>
      Home
      <ul>
          <li><router-link :to="{name:'contact'}">contact</router-link></li>
          <li><router-link :to="{name: 'crew', params:{ ident: 'seresCallejeros'}}">Crew</router-link></li>
      </ul>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
