<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <Atividade />
    <hr />
    <p>{{ cpf | inverter | cpf }}</p>
    <input type="text" :value="cpf | cpf" />
    <hr />
    <Frutas />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keypress.enter="addFruta" />
    </div>
  </div>
</template>

<script>
import FrutasMixins from "./components/frutasMixis";
import Frutas from "./components/Frutas.vue";
import Atividade from "./components/Atividade.vue";
export default {
  mixins: [FrutasMixins],
  components: { Atividade, Frutas },
  filters: {
    cpf(valor) {
      let arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "04788244985",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  font-size: 2.5rem;
}
</style>
