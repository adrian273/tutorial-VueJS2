<template lang="html">
    <div :class="[$style.color]">
        <h1>Nombre : {{name}}</h1>
        <h2>Apellido : {{surname}}</h2>
        <h3>Hobbys: {{hoobys}}</h3>
        <h4>Años : {{age}}</h4>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: mapState({
        name: (state) => state.name,
        surname: (state) => state.surname,
        hoobys: (s) => s.hoobys,
        age: (st) => st.age
    }),
}
</script>

<style lang="css" module>
    .color h1{
        color:red;
    }
    .color h2{
        color: blue;
    }
    .color h3,h4{
        color: green;
    }
</style>
