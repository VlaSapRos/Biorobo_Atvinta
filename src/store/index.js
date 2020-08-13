import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        coinsText: 'монет',
        amountCoins: 0,
        stockroom: {
            biomechanisms: 0,
            processors: 0,
            souls: 0,
            robots: 0,
        },
        errorText: {
            part1:'',
            part2:'',
            part3:'',
        },
    },
    mutations: {
        coinsDeclination(state) {
            let amount = state.amountCoins
            if (amount != 11 && amount != 12 && amount != 13 && amount != 14) {
                switch (amount % 10) {
                    case 1 : state.coinsText = 'монета'; break; 
                    case 2 :
                    case 3 :
                    case 4 : state.coinsText = 'монеты'; break;
                    default : state.coinsText = 'монет';
                }
            } else { state.coinsText = 'монет'; }
        },
        addCoins (state, checkbox) {
            let count;
            if (checkbox){
                count = 5;
            }
            else {
                count = 1;
            }
            if( (state.amountCoins + count) <= 100 ) {
                state.amountCoins += count;
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
            if( (state.amountCoins + cost) <= 100 ) { 
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
        },
        createRobot (state, {costRobots}) {
            let enoughBiomechanisms,enoughProcessors,enoughSouls
            if (state.stockroom.biomechanisms >= costRobots.biomechanisms) { enoughBiomechanisms = true }
            else { 
                enoughBiomechanisms = false;
                state.errorText.part1 = 'Вам не хватает биомеханизмов.';
            }
            if (state.stockroom.processors >= costRobots.processors) {enoughProcessors = true }
            else { 
                enoughProcessors = false;
                state.errorText.part2 = 'Вам не хватает процессоров.';
            }
            if (state.stockroom.souls >= costRobots.souls) {enoughSouls = true }
            else { 
                enoughSouls = false;
                state.errorText.part3 = 'Вам не хватает душ.';
            }
            if (enoughBiomechanisms && enoughProcessors && enoughSouls) {
                state.stockroom.robots += 1;
                state.stockroom.biomechanisms -= costRobots.biomechanisms;
                state.stockroom.processors -= costRobots.processors;
                state.stockroom.souls -= costRobots.souls;
            }
            else {
                alert(state.errorText.part1 + ' ' + state.errorText.part2 + ' ' + state.errorText.part3);
                state.errorText.part1 = '';
                state.errorText.part2 = '';
                state.errorText.part3 = '';
            }
        }
    },
    actions: {

    },
    getters: {
        showCoinsText (state) {
            return state.coinsText
        },
        showAmountCoins (state) {
            return state.amountCoins
        },
        showStockroom (state) {
            return state.stockroom
        },
        showAmountRobots (state) {
            return state.stockroom.robots
        }
    }
})