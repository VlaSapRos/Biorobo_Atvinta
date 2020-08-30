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
        createRobot (state, costRobots) {
            state.stockroom.robots += 1;
            state.amountCoins -= +costRobots.coins;
            state.stockroom.biomechanisms -= costRobots.biomechanisms;
            state.stockroom.processors -= costRobots.processors;
            state.stockroom.souls -= costRobots.souls;
        }
    },
    actions: {

    },
    getters: {

    }
})