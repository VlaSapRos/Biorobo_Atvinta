import './scss/main.scss';
window.Vue = require('vue');
import store from './store';
Vue.component('main-component', require('./components/Main.vue').default);

const app = new Vue({
    data () {
        return {
            visibility: false,
        }
    },
    store,
    el: '#app'
})