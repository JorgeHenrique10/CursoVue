import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('eventoIdade', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('eventoIdade', callback)
        }
    }
})