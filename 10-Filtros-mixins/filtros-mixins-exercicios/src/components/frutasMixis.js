export default {
    data() {
        return {
            fruta: "",
            frutas: ["banana", "manga", "laranja"],
        };
    },
    methods: {
        addFruta() {
            this.frutas.push(this.fruta);
            this.fruta = "";
        },
    },
};