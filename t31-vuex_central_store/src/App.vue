<template lang="html">
<!--  <contador :cantidad="cantidad"
            @aumentar="cantidad++"
            @reducir="cantidad--">
  </contador>
-->
<contador></contador>
</template>

<script>
import Contador from './components/Contador.vue';
export default {
    components :{Contador},
}
</script>
