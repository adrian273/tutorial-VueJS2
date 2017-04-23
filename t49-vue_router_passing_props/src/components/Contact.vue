<template>
    <section>
        <h2>Donde encontrarme</h2>
        <p>Maule city, La charly-charly</p>
        <!-- <h5>{{$route.params.newsletters}}</h5> -->
        <h5>{{newsletters}}</h5>
        <!-- <template v-if="$route.params.newsletters === 'true'"> -->
        <!-- <template v-if="newsletters === 'true'"> -->
        <template v-if="newsletters">
          <form class="">
              <label for="">Correo</label>
              <input type="text" name="" value="" placeholder="ingresa tu correo">
          </form>
        </template>
    </section>
</template>

<script>
export default {
    props: ['newsletters'],
}
</script>
