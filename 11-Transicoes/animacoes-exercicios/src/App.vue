<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mensagem</b-button
    >
    <!-- <transition name="fade" type="transition" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="transition" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition> -->

    <b-select v-model="tipoAnimacao" class="mb-4s">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" type="transition" appear mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>
    <hr />
    <b-button variant="primary" @click="exibir2 = !exibir2">Exibir</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>

    <hr />
    <div class="mb-4">
      <b-button
        class="mr-2"
        variant="primary"
        @click="componenteSelecionado = 'AlertaInfo'"
        >Info</b-button
      >
      <b-button
        varianti="secundary"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        >Advertência</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <hr />

    <b-button class="mb-4" @click="adicionarAluno()">Adicionar aluno</b-button>

    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)">{{
          aluno
        }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaInfo from "./AlertaInfo.vue";
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
export default {
  components: { AlertaInfo, AlertaAdvertencia },
  data() {
    return {
      msg: "Uma mensagem para o usuário!",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
      alunos: ["Ana", "Carla", "João", "Carlos"],
    };
  },
  methods: {
    adicionarAluno() {
      const al = Math.random().toString(36).substring(2);
      this.alunos.push(al);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        var novalargura =
          this.larguraBase + (negativo ? -rodada * 20 : rodada * 10);
        el.style.width = `${novalargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = this.larguraBase;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("canceled");
    },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = this.larguraBase;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave(el) {
      console.log("afterleave");
    },
    leaveCancelled(el) {
      console.log("canceled");
    },
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
  font-size: 1.5rem;
}
.caixa {
  height: 200px;
  width: 300px;
  margin: 30px auto;
  background-color: darkseagreen;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: 2s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}
</style>
