<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr />
    <p><strong>Código: </strong> {{ id }}</p>
    <hr />
    <!-- <router-link :to="`/usuario/${id}/editar`" tag="button" primario>Editar</router-link> -->
    <!-- usando rotas nomeadas -->
    <router-link
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape',
      }"
      tag="button"
      primario
      >Editar</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Interceptando - No ciclo de vida do Router vue");
    const autenticado = true;
    autenticado ? next() : next(false);
  },
};
</script>

<style>
</style>