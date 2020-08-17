<template lang="html">
    <div class='wallet'>
        <h1>Кошелёк криптоволют</h1>
        <p class='coins'> {{ amountCoins + ' biorobo ' + coinsDeclination }} </p>
        <p class='check'>
            <button @click="$store.commit('addCoins',(checked) ? 5 : 1)">Нацыганить</button>
            <input type="checkbox" id="checkbox" v-model="checked"> 
            Цыганить по 5 монет
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data() {
            return {
                checked:false,
            }
        },
        computed: {
            ...mapState ([
                'amountCoins',
            ]),
            coinsDeclination() {
                let coinsText = '';
                let amount = this.amountCoins;
                if (amount != 11 && amount != 12 && amount != 13 && amount != 14) {
                    switch (amount % 10) {
                        case 1 : coinsText = 'монета'; break; 
                        case 2 :
                        case 3 :
                        case 4 : coinsText = 'монеты'; break;
                        default : coinsText = 'монет';
                    }
                } else { coinsText = 'монет'; }
                return coinsText;
            },
        }
    };
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

