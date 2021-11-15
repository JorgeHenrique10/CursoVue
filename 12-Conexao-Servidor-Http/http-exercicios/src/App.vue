<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
      dismissible
      show
      >{{ mensagem.texto }}</b-alert
    >
    <b-card>
      <b-form-group label="Nome">
        <b-form-input
          type="text"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
          size="lg"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input
          type="email"
          v-model="usuario.email"
          placeholder="Inserir o Email"
          size="lg"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button variant="sumary" @click="salvar">Salvar</b-button>
      <b-button variant="success ml-2" @click="obterUsuarios"
        >Obter Usuários</b-button
      >
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome</strong> {{ usuario.nome }} <br />
        <strong>Email</strong> {{ usuario.email }} <br />
        <strong>ID</strong> {{ id }} <br />
        <b-button variant="warning" @click="carregarUser(id)" class="mr-2"
          >Carregar</b-button
        >
        <b-button variant="danger" @click="excluirUser(id)">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
      usuarios: [],
      mensagens: [],
    };
  },
  methods: {
    limpar() {
      this.id = null;
      this.usuario.nome = "";
      this.usuario.email = "";
      this.mensagens = [];
    },
    carregarUser(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[this.id] };
    },
    excluirUser(id) {
      this.id = id;
      this.$http
        .delete(`/usuarios/${this.id}.json`)
        .then(() => {
          this.obterUsuarios();
        })
        .catch((error) => {
          this.mensagens.push({
            texto: "Error ao fazer a exclusão do usuário! - " + error,
            tipo: "danger",
          });
        });
    },
    salvar() {
      let method = this.id ? "patch" : "post";
      let finalReq = this.id ? `/usuarios/${this.id}.json` : "usuarios.json";
      this.$http[method](finalReq, this.usuario)
        .then(() => {
          this.obterUsuarios();
          this.mensagens.push({
            texto: "Usuário cadastrado com sucesso!",
            tipo: "success",
          });
        })
        .catch((error) => {
          this.mensagens.push({
            texto: "Error ao salvar o usuário! - " + error,
            tipo: "danger",
          });
        });
    },
    obterUsuarios() {
      this.$http("usuarios.json").then((resp) => {
        this.limpar();
        this.usuarios = resp.data;
      });
    },
  },
  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "João",
  //         email: "joao@mailinator.com",
  //       })
  //       .then((resp) => console.log(resp));
  //   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
