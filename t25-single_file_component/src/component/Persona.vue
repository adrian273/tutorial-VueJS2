<template id="">
    <div class="">
        <template v-if="persona">
            <h1 v-text="dataPerson.name"></h1>
            <h2 v-text="dataPerson.email"></h2>
            <img :src="dataPerson.image" alt="" />
        </template>
        <span v-else>Cargando Persona</span>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        axios.get('https://randomuser.me/api/?results=500')
            .then((response) => {
                this.persona = response.data.results[0];
            });
    },
    data() {
        return {
            persona: null,
        }
    },
    computed: {
        dataPerson() {
            return {
              name : `${this.persona.name.first} ${this.persona.name.last}`,
              image : this.persona.picture.medium,
              email : this.persona.email
            }
        }
    }
}
</script>

<style>

</style>
