new Vue({
    el: '#desafio',
    data: {
        nome: 'Jorge Henrque',
        idade: '32',
        img: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
    },
    methods: {
        multiplicadorIdade(mult) {
            return this.idade * mult;
        },
        numeroRandon(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})