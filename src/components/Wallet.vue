<template lang="html">
    <div class='wallet'>
        <h1>Кошелёк криптоволют</h1>
        <p class='coins'> {{ amountCoins + ' biorobo ' + coinsText }} </p>
        <p class='check'>
            <button @click="$store.commit('addCoins',checked)">Нацыганить</button>
            <input type="checkbox" id="checkbox" v-model="checked"> 
            Цыганить по 5 монет
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked:false,
            }
        },
        computed: {
            ...mapGetters([
                'coinsDeclination'
            ]),
            coinsText() {
                this.$store.commit('coinsDeclination');
                return this.$store.getters.showCoinsText
            },
            amountCoins() {
                return this.$store.getters.showAmountCoins
            },
            coinsDeclination() {
                let amount = this.$store.getters.showAmountCoins
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
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */
        color: #FFFFFF;
    }
    .coins {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #A3B8CC;
    }
    .check {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        color: #FFFFFF;
    }
    button {
        width: 111px;
        height: 24px;
        border: none;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #FF7F22;
        background-color: #222B33;
        border-bottom: 1px solid rgba(255, 127, 34, 0.5);
    }
    .wallet {
        display: block;
    }
</style>

