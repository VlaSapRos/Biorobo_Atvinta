<template lang="pug">
  .card
    .card__picture
      img.card__img(:src='pic')
    span.card__title {{ title }}
    span.card__subtitle Стоимость: {{ cost }} монет
    button( :disabled='amountCoins < cost' class='button-install' v-on:click="$emit('buy')" ) Установить
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
  .card__picture {
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
  .card__img {
    filter: drop-shadow(0px 0px 75px rgba(255, 127, 34, 0.5))
  }


</style>

