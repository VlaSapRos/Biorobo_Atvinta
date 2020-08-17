import './scss/main.scss';
window.Vue = require('vue');
import store from './store';

Vue.component('Example', require('./components/Example.vue').default);

Vue.component('Main', require('./components/Main.vue').default);

Vue.component('MyHeader', require('./components/Header.vue').default);

Vue.component('Wallet', require('./components/Wallet.vue').default);

Vue.component('Market', require('./components/Market/Market.vue').default);
Vue.component('MarketCard', require('./components/Market/MarketCard.vue').default);

Vue.component('Stock', require('./components/Stock/Stock.vue').default);
Vue.component('StockCard', require('./components/Stock/StockCard.vue').default);

Vue.component('Manufacturing', require('./components/Manufacture/Manufacture.vue').default);
Vue.component('ManufacturingRadio', require('./components/Manufacture/Manufacture__radio.vue').default);
Vue.component('ManufacturingCheck', require('./components/Manufacture/Manufacture__check.vue').default);

const app = new Vue({
    data () {
        return {
            visibility: true,
        }
    },
    store,
    el: '#app'
})