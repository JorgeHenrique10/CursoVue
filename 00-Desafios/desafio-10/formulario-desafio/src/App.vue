<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!submit">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <NomeCompleto v-model="nomeCompleto" />
        <!-- Email -->
        <Rotulo nome="Email">
          <input type="text" v-model="email" />
        </Rotulo>
        <!-- Senha -->
        <Rotulo nome="Senha">
          <input type="password" v-model="senha" />
        </Rotulo>
        <!-- Armazenar Dados? (Sim/Não) -->
        <Rotulo nome="Armazenar Dados?">
          <span class="mr-4">
            Sim
            <input type="radio" value="true" v-model="armazenar" />
          </span>
          <span class="mr-4">
            Não
            <input type="radio" value="false" v-model="armazenar" />
          </span>
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          {{ nomeCompleto.nome }}
        </Rotulo>
        <Rotulo nome="Sobrenome">
          {{ nomeCompleto.sobrenome }}
        </Rotulo>
        <!-- Email -->
        <Rotulo nome="Email">
          {{ email }}
        </Rotulo>
        <!-- Senha -->
        <Rotulo nome="Senha">
          {{ senha }}
        </Rotulo>
        <!-- Armazenar Dados? -->
        <Rotulo nome="Armazenar Dados?">
          {{ armazenar }}
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { NomeCompleto, Rotulo },
  data() {
    return {
      nomeCompleto: {
        nome: "",
        sobrenome: "",
      },
      email: "",
      senha: "",
      armazenar: false,
      submit: false,
    };
  },
  methods: {
    enviar() {
      this.submit = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
