<template lang="pug">
  div(class='block block-column')
    h1(class='rubric') Кошелёк криптовалют
    div(class='coinConteiner')
      coin(v-for="item in coins" :number='item.number' v-if='amountCoins>=(item.number+1)')
    p(class='coins') <b class='coinsBold'>{{ amountCoins }}</b> {{' biorobo ' + coinsDeclination }}
    div(class='walletWrapper')
      button(class='buttonToGamble' @click="addCoins(checked)") Нацыганить
      input(type="checkbox" class='inputCheckbox' id="checkbox" v-model="checked")
      label(class='labelCheckbox' for='checkbox')
      label(class='labelCheckboxText' for='checkbox') Цыганить по 5 монет
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
  .coins {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #A3B8CC;
    margin: 0;
    margin-bottom: 43px;
  }
  .coinsBold {
    font-style: normal;
    font-weight: 1200;
  }
  .coinConteiner {
    padding: 0;
    margin-bottom: 23px;
    position: relative;
    height: 20px;
  }
  .inputCheckbox {
    appearance: none;
    position: absolute;
    display: none;
  }
  .labelCheckboxText {
    position: absolute;
    left: 170px;
    font-weight: 500;
    font-size: 16px;
  }
  .labelCheckbox {
    position: absolute;
    left: 133px;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
  }
  .labelCheckbox::after {
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
  .inputCheckbox:checked + .labelCheckbox::after {
    opacity: 1;
  }
  .buttonToGamble {
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
  .walletWrapper {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>

