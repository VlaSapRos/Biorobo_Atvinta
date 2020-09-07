<template lang="pug">
  div(class='card')
    div(class='picture')
      img(class='img' :src='pic')
    h1(class='cardTitle') {{ title }}
    h2(class='cardSubtitle') Стоимость: {{ cost }} монет
    button(  :disabled='amountCoins < cost' class = 'buttonInstall' v-on:click="$emit('buy')") Установить
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: {
      pic: null,
      title: '',
      subtitle: '',
      cost: 0,
    },
    computed: {
      ...mapState([
        'amountCoins',
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .picture {
    width: 236px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 25px;
    filter: drop-shadow(0px 0px 35px rgba(255, 127, 34, 0.8));
  }
  .img {
    filter: drop-shadow(0px 0px 75px rgba(255, 127, 34, 0.5))
  }
  .buttonInstall {
    width: 200px;
    height: 48px;
    border-radius: 60px;
    background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    border: none;
  }
  .buttonInstall:hover {
    background: #FF5722;
  }
  .buttonInstall:active {
    background: #FF7F22;
  }
  .buttonInstall:disabled {
    color: #7D90A6;
    background: #4C5865;
  }
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 286px;
    width: 236px;
  }
</style>

