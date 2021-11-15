export default {
    data() {
        return {
            valor: "Hello World",
            palavra: "Pedro é legal",
        };
    },
    computed: {
        separar() {
            return this.valor.split(" ").join(",");
        },
        contar() {
            let arr = this.palavra.split(" ");
            let arr2 = [];
            arr.forEach((p) => {
                arr2.push(`${p} (${p.length})`);
            });

            return arr2.join(" ");
        },
    },
}