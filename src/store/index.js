import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        amountCoins: 0,
        stockroom: {
            biomechanisms: 0,
            processors: 0,
            souls: 0,
        },
    },
    mutations: {
        addCoins (state, n) {
            if(state.amountCoins < 100) {
                state.amountCoins += n;
            }
        },
        subtractCoins (state, n) {
            if(state.amountCoins > 0) {
                state.amountCoins -= n;
            }
        },
        buy (state, {thing,cost}) {
            if(state.amountCoins >= cost) {
                state.amountCoins -= cost;
                switch(thing) {
                    case 'biomechanisms' : state.stockroom.biomechanisms++; break;
                    case 'processors' : state.stockroom.processors++; break;
                    case 'souls' : state.stockroom.souls++; break;
                }
            }
        },
        sell (state, {thing,cost}) {
            if( (state.amountCoins + cost) <= 100) { 
                switch(thing) {
                    case 'biomechanisms' : 
                    if(state.stockroom.biomechanisms > 0) {
                        state.stockroom.biomechanisms--;
                        state.amountCoins += cost;
                    } break;
                    case 'processors' : 
                    if(state.stockroom.processors > 0) {
                        state.stockroom.processors--;
                        state.amountCoins += cost;
                    } break;
                    case 'souls' : 
                    if(state.stockroom.souls > 0) {
                        state.stockroom.souls--;
                        state.amountCoins += cost;
                    } break;
                }
            }
        }
    },
    actions: {

    },
    getters: {
        showAmountCoins (state) {
            return state.amountCoins
        },
        showStockroom (state) {
            return state.stockroom
        }
    }
})