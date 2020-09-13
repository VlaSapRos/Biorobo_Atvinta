<template lang="pug">
  .myheader
    img(src='assets/img/pac-man.svg')
    a.myheader__button(href='#manufacture') Произвести биоробота
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: mapState ([
      'coinsText'
    ])
  };
</script>

<style lang="scss">
  .myheader{
    display: flex;
    justify-content: space-between;
    height: 48px ;
  }
  .myheader__button {
    display: flex;
    width: 236px;
    height: 48px;
    border-radius: 60px;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    border:2px solid #FF7F22; 
    background-color: transparent;
    align-items: center;
    justify-content: center;
  }
</style>