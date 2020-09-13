<template lang="pug">
  .card
    span.card__title {{ title }}
    span.card__subtitle.card__subtitle_StockCard  Стоимость: {{ cost }} монет
    span.card__quantity {{ quantity }} шт
    .button-sell-border( v-bind:class="{'button-sell-border_disabled': (quantity < 1) }")
      button.button-sell-border__button(:disabled='quantity < 1' v-on:click="$emit((amountCoins+cost <= 100) ? 'sell' : 'overHundred')") Продать
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
  .card__quantity {
    width: 236px;
    height: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .card__subtitle_StockCard {
    margin-bottom: 15px;
  }
  .card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 236px;
  }
  
</style>