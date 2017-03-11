<template lang="jade">
    div
        tareas-restantes
        ul
            li(v-for='t in tareas') {{t.nombre}}
</template>

<script>
import { mapState } from 'vuex';
import TareasRestantes from './components/TareasRestantes.vue';

export default {
  components : {TareasRestantes},
    computed : mapState(['tareas'])
}
</script>
