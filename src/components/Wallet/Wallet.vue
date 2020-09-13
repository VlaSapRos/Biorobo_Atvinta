<template lang="pug">
  .block
    span.rubric Кошелёк криптовалют
    .Wallet__coin-container
      coin(v-for="item in coins" :number='item.number' v-if='amountCoins>=(item.number+1)')
    p.Wallet__coins <b class='Wallet__coins_bold'>{{ amountCoins }}</b> {{' biorobo ' + coinsDeclination }}
    .Wallet__wrapper
      button.Wallet__button-to-gamble(@click="addCoins(checked)") Нацыганить
      input.Wallet__input-checkbox(type="checkbox" id="checkbox" v-model="checked")
      label.Wallet__label-checkbox(for='checkbox')
      label.Wallet__label-checkbox-text(for='checkbox') Цыганить по 5 монет
</template>

<script>
import { mapState } from 'vuex';
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
  .Wallet__coins {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #A3B8CC;
    margin: 0;
    margin-bottom: 43px;
  }
  .Wallet__coins_bold {
    font-style: normal;
    font-weight: 1200;
  }
  .Wallet__coin-container {
    padding: 0;
    margin-bottom: 23px;
    position: relative;
    height: 20px;
  }
  .Wallet__input-checkbox {
    appearance: none;
    position: absolute;
    display: none;
  }
  .Wallet__label-checkbox-text {
    position: absolute;
    left: 170px;
    font-weight: 500;
    font-size: 16px;
  }
  .Wallet__label-checkbox {
    position: absolute;
    left: 133px;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
  }
  .Wallet__label-checkbox::after {
    content: '';
    background: url('/assets/img/checked.svg') no-repeat;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    position: absolute;
    left: 3px;
    top: 4px;
    opacity: 0;
  }
  .Wallet__input-checkbox:checked + .Wallet__label-checkbox::after {
    opacity: 1;
  }
  .Wallet__button-to-gamble {
    width: 102px;
    height: 24px;
    padding: 0;
    border: none;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF7F22;
    background-color: #222B33;
    border-bottom: FF7F22;
    border-bottom: 1px solid rgba(255, 127, 34, 0.5);
  }
  .Wallet__wrapper {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>

