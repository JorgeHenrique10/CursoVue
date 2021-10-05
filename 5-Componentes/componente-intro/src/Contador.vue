<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="diminuir">-</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    diminuir() {
      this.contador--;
    },
  },
};
</script>

<style>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}
.contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: orange;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>