<template>
  <div>
    <p>{{ valor | separarVirgula }}</p>
    <p>{{ palavra | contarPalavra }}</p>
    <hr />
    <p>Propriedade Computada</p>
    <p>{{ separar }}</p>
    <p>{{ contar }}</p>
  </div>
</template>

<script>
import atividadeMaxin from "./atividadeMixin";
export default {
  mixins: [atividadeMaxin],
  filters: {
    separarVirgula(valor) {
      return valor.split(" ").join(",");
    },
  },
};
</script>

<style>
</style>