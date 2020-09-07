<template lang="pug">
  div(class='card')
    h1(class='cardTitle') {{ title }}
    h2(class='cardSubtitle cardSubtitle_StockCard') Стоимость: {{ cost }} монет
    h1(class='quantity') {{ quantity }} шт
    div(class='buttonSellBorder' v-bind:class="{buttonSellBorderDisabled: (quantity < 1) }")
      button(:disabled='quantity < 1' class = 'buttonSell' v-on:click="$emit((amountCoins+cost <= 100) ? 'sell' : 'overHundred')") Продать
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    props: {
      title: '',
      quantity: '',
      cost: 0,
      thing: '',
    },
    computed: {
      ...mapState([
        'amountCoins',
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .quantity {
    width: 236px;
    height: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .cardSubtitle_StockCard {
    margin-bottom: 15px;
  }
  .card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 236px;
  }
  .buttonSellBorder{
    background: linear-gradient(90deg, #22B3E3 0%,#7CDAF9 50%, #22B3E3 100%);
    border-radius: 60px;
    height: 48px;
    width: 200px;
    padding: 2px;
  }
  .buttonSellBorderDisabled {
    background: #4C5865;
    pointer-events: none;
  }
  .buttonSell {
    width: 196px;
    height: 44px;
    border-radius: 60px;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border-color: transparent ;
    background-color: #212529;
    color: #7CDAF9;
    }
  .buttonSell:disabled {
    color: #4C5865;
    pointer-events: none;
  }
  .buttonSell:hover {
    background: #7CDAF9;
    color: #212529;
    box-shadow: 0px 16px 20px 3px rgba(34, 179, 227, 0.15), 0px 0px 42px 0px rgba(34, 179, 227, 0.1);
  }
  .buttonSell:active {
    box-shadow: 0px 0px 42px 0px rgba(34, 179, 227, 0.1);
    background-color: #212529;
    color: #7CDAF9;
  }
  .buttonSellBorder:hover {
    background: #7CDAF9;
  }    
  .buttonSellBorder:active {
    background: #22B3E3;
  }
</style>