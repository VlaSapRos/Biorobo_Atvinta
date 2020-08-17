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
        addCoins (state, count) {
            state.amountCoins += count;
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

    }
})