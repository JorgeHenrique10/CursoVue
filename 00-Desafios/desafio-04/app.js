new Vue({
	el: '#desafio',
	data: {
		perigo: true,
		class1: 'destaque',
		class2: 'c2',
		class3: '',
		class4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		porcentagem: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			cont = 0;
			const temporizador = setInterval(() => {
				cont++;
				this.porcentagem = cont + '%';
				if (cont == 100) {
					clearInterval(temporizador)
				}
			}, 1000);
		},
		setPerigo(event) {
			if (event.target.value == "true") {
				this.perigo = true
			}
			else if (event.target.value == "false") {
				this.perigo = false
			}
		},
	}
})
