import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import example from './example' // название модуля
import bank from './bank'

export default new Vuex.Store({
    modules: {
        example,
        bank,
    }
})