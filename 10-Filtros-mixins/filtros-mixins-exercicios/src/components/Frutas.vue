<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keypress.enter="addFruta" />
  </div>
</template>

<script>
import FrutasMixins from "./frutasMixis";
export default {
  mixins: [FrutasMixins],
};
</script>

<style>
</style>