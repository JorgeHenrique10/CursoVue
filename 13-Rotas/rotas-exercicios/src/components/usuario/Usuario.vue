<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr />
    <router-view />
    <button sucesso @click="irParaInicio()">Voltar</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
  methods: {
    irParaInicio() {
      //   this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style>
</style>