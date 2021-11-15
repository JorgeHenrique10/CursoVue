import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://curso-vue-b3302-default-rtdb.firebaseio.com/'
// axios.defaults.headers.commom['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

// Instalando o pluguin axios global
Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-b3302-default-rtdb.firebaseio.com/',
            headers: {
                'Authorization': 'abc123'
            }
        })
        // Interceptando a requisicao
        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method);
            return config
        }, error => Promise.reject(error))

        // Interceptando a resposta
        Vue.prototype.$http.interceptors.response.use(res => {
            // var array = []
            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            // }
            // res.data = array;
            return res
        }, error => Promise.reject(error))
    }
})