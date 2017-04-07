<template lang="html">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title"></h3>
      </div>
      <div class="panel-body">
          Usuario {{this.$route.params.name}}
      </div>
      <div class="panel-footer">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
