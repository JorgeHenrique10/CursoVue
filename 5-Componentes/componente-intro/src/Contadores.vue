<template>
  <div class="contadores">
    <app-contador v-for="i in 5" :key="i"></app-contador>
  </div>
</template>

<script>
import Contador from "./Contador.vue";

export default {
  components: {
    "app-contador": Contador,
  },
};
</script>

<style>
</style>