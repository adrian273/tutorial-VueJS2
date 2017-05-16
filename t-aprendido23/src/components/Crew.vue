<template>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Crew</h3>
      </div>
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['ident']
    }
</script>
