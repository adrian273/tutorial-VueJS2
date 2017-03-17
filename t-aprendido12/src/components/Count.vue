<template lang="html">
    <section>
        <span>Cantidad : {{cantidad}}</span><br>
        <button type="button" name="button" @click='aumentar'>Aumentar</button>
        <button type="button" name="button" @click='reducir' style="background-color:red;">Reducir</button>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: mapState(['cantidad']),
    methods: mapMutations(['aumentar', 'reducir']),
}
</script>

<style lang="css" module>
    button {
        color: white;
        background-color: blue;
        padding: 15px !important;
        border-radius: 15px;
        box-shadow: 2px 1px 3px 3px #00ff36;
    }
    span {
      font-size: 36px;
      border-left-width: medium;
      text-shadow: 1px 1px red;
    }
    section {
        padding: 125px;
        background-color: yellow;
    }
</style>
