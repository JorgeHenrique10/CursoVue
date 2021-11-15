<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário é: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade é <strong>{{ idade }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar</button>
    <button @click="reiniciarNome">Reiniciar nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    // nome: String,
    nome: {
      type: String,
      //   required: true,
      default: "Anônimo",
    },
    idade: Number,
    reiniciarFn: Function,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nome = "Ana";
      this.$emit("eventoNome", this.nome);
    },
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
