export default {
    state: {
        amountCoins: 0,
    },
    mutations: {
        addCoins (state, n) {
            state.amountCoins += n;
        },
        subtractCoins (state, n) {
            state.amountCoins -= n;
        }
    },
    actions: {
        addCoins ({ commit }, n) {
            commit ('addCoins', n)
        }
    },
    getters: {
        showAmountCoins (state) {
            return state.amountCoins
        }
    }

}