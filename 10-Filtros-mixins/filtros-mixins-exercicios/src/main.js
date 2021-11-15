import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', (value) => {
	return value.split('').reverse().join('')
})

Vue.filter('contarPalavra', (value) => {
	let arr = value.split(' ');
	let arr2 = [];
	arr.forEach(p => {
		arr2.push(`${p} (${p.length})`)
	});

	return (arr2.join(' '));
})

new Vue({
	render: h => h(App)
}).$mount('#app')
