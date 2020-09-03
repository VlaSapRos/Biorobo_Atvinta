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
        robotIsCreated: false,
        flags:{
            biomechanism: [false,false,false,false],
            processor: [false,false,false,false],
            soul: [false,false,false,false],
        } 
    },
    mutations: {
        addCoins (state, count) {
            state.amountCoins += count;
        },

        buyBiomechanism (state,cost) {
            state.stockroom.biomechanisms++;
            state.amountCoins -= cost;
        },
        buyProcessor (state,cost) {
            state.stockroom.processors++;
            state.amountCoins -= cost;
        },
        buySoul (state,cost) {
            state.stockroom.souls++;
            state.amountCoins -= cost;
        },

        sellBiomechanism (state,cost) {
            state.stockroom.biomechanisms--;
            state.amountCoins += cost;
        },
        sellProcessor (state,cost) {
            state.stockroom.processors--;
            state.amountCoins += cost;
        },
        sellSoul (state,cost) {
            state.stockroom.souls--;
            state.amountCoins += cost;
        },

        createRobot (state, costRobots) {
            state.amountCoins -= +costRobots.coins;
            state.stockroom.biomechanisms -= costRobots.biomechanisms;
            state.stockroom.processors -= costRobots.processors;
            state.stockroom.souls -= costRobots.souls;
            state.robotIsCreated = true;
        },

        selectedBiomechanism (state, index) {
            Vue.set(state.flags.biomechanism, index, true)
        },
        unSelectedBiomechanism (state, index) {
            Vue.set(state.flags.biomechanism, index, false)
        },
        selectedProcessor (state, index) {
            Vue.set(state.flags.processor, index, true)
        },
        unSelectedProcessor (state, index) {
            Vue.set(state.flags.processor, index, false)
        },
        selectedSoul (state, index) {
            Vue.set(state.flags.soul, index, true)
        },
        unSelectedSoul (state, index) {
            Vue.set(state.flags.soul, index, false)
        },

        reset (state) {
            state.robotIsCreated = false;
            state.flags = {
                biomechanism: [false,false,false,false],
                processor: [false,false,false,false],
                soul: [false,false,false,false], 
            }
        },
    },
    actions: {

    },
    getters: {

    }
})