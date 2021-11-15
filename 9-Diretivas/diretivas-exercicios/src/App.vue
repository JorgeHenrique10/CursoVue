<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque="'red'">Usando Diretiva Personalizada</p>
    <p v-destaque:fundo.atraso="cor">Usando Diretiva Personalizada</p>
    <hr />
    <p v-destaque-local="{ cor1: 'red', atraso: 3000 }">
      Usando Diretiva Personalizada
    </p>
    <p
      v-destaque-local:fundo.atraso.alternar="{
        cor1: cor,
        cor2: 'purple',
        atraso: 3000,
        intervalo: 1000,
      }"
    >
      Usando Diretiva Personalizada
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "destaque-local": {
      bind(el, binding) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;
        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = "";

        if (binding.modifiers["atraso"]) atraso = binding.value.atraso;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(cor1);
          }
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "lightblue",
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
</style>
