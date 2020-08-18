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
        buyBiomechanism(state,cost) {
            state.stockroom.biomechanisms++;
            state.amountCoins -= cost;
        },
        buyProcessor(state,cost) {
            state.stockroom.processors++;
            state.amountCoins -= cost;
        },
        buySoul(state,cost) {
            state.stockroom.souls++;
            state.amountCoins -= cost;
        },
        sellBiomechanism(state,cost) {
            state.stockroom.biomechanisms--;
            state.amountCoins += cost;
        },
        sellProcessor(state,cost){
            state.stockroom.processors--;
            state.amountCoins += cost;
        },
        sellSoul(state,cost) {
            state.stockroom.souls--;
            state.amountCoins += cost;
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