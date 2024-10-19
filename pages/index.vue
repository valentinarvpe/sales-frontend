<template>
  <v-parallax
    src="/assets/images/default.jpeg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="h1">
        Sales Hand
      </h1>
      <h2 class="subheading">
        Build your company now!
      </h2>
    </div>
  </v-parallax>
  <Footer></Footer>
</template>
<script>
export default {
  name: 'MyParallax'
}
</script>

<style scoped>
/* Asegúrate de que no haya padding o margen adicionales */
.v-parallax {
  margin: 0;
  padding: 0;
}
</style>
