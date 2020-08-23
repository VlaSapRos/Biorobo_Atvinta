<template lang="html">
    <div class='wallet'>
        <h1 class='rubric'>Кошелёк криптоволют</h1>
            <div class='coinConteiner'>
                <coin v-for="item in coins" :number='item.number' v-if='amountCoins>=(item.number+1)'/>
            </div>
        <p class='coins'> <b class='coinsBold'>{{ amountCoins }}</b> {{' biorobo ' + coinsDeclination }} </p>
            <div>    
                <button @click="addCoins(checked)"
                >Нацыганить</button>
                <input type="checkbox" id="checkbox" v-model="checked"> 
                Цыганить по 5 монет
            </div>    
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { createElement } from 'vue';
import WalletCoinVue from './WalletCoin.vue';
    export default {
        data() {
            return {
                checked:false,
                coins: [],
            }
        },
        components:{
            'coin': WalletCoinVue,

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
            checkWallet(checked) {
                if( (amountCoins + ( (checked) ? 5 : 1 ) ) > 100) {
                    return 'overHundred'
                }
                else {return 'addCoins'}
            },

            
        },
        mounted: function countCoins() {
            for (let i=0; i<100; i++){
                this.coins[i]= {number:i};
            }
        },
        methods:{
            addCoins: function(checked) {
                if ((this.amountCoins + ((checked) ? 5 : 1)) <= 100 ) {
                    this.$store.commit('addCoins',(checked) ? 5 : 1)
                } else {
                    this.$emit('overHundred');
                    }
            }
        },
    };
</script>

<style lang="scss" scoped>

    .coins {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
        color: #A3B8CC;
    }
    .coinsBold {
        font-style: normal;
        font-weight: 1200;
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
        display: flex;
        flex-direction: column;
        padding-left: 130px;
    }
    .coinConteiner {
        padding: 0;
        margin: 0;
        position: relative;
        height: 20px;
    }
</style>

