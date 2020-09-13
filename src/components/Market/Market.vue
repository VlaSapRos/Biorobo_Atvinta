<template lang="pug">
  .block
    span.rubric Рынок комплектующих
    .container
      MarketCard(
        pic='/assets/img/biomechanism/biomechanism_market.svg' 
        title='Биомеханизм' 
        :cost = 'cost.biomechanism' 
        v-on:buy="$store.commit('buyBiomechanism',cost.biomechanism)"
      )
      MarketCard(
        pic='/assets/img/processor/processor_market.svg' 
        title='Процессор' 
        :cost = 'cost.processor' 
        v-on:buy="$store.commit('buyProcessor',cost.processor)"
      )
      MarketCard(
        pic='/assets/img/soul/soul_market.svg' 
        title='Душа' 
        :cost = 'cost.soul' 
        v-on:buy="$store.commit('buySoul',cost.soul)"
      )
</template>

<script>
  import MarketCardVue from './MarketCard.vue';
  export default {
    data() {
      return {
        cost: {
          biomechanism: 7,
          processor: 5,
          soul: 25,
        }
      }
    },
    components: {
      'MarketCard': MarketCardVue,
    },
  }
</script>
