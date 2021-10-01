new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        chamarAlerta() {
            alert("Alerta Chamado!");
        },
        armazenar(event) {
            this.valor = event.target.value;
        }
    }
})