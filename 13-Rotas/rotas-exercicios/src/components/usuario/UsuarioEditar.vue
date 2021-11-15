<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <hr />
    <p><strong>Código: </strong> {{ id }}</p>
    <p>
      <strong>Completo: </strong> {{ $route.query.completo ? "Sim" : "Não" }}
    </p>
    <p><strong>Língua: </strong> {{ $route.query.lingua }}</p>
    <hr />
    <button primario @click="confirmar = true">Confirmar</button>

    <div id="rodape">
      <p>Curso Vue</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmar: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmar) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      }
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>