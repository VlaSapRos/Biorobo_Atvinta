<template lang="pug">
  .block
    span.rubric Склад
    .container
      StockCard(
        :quantity='stockroom.biomechanisms'
        title='Биомеханизм'
        :cost='cost.biomechanism'
        v-on:sell="$store.commit('sellBiomechanism',cost.biomechanism); (stockroom.biomechanisms < 4) ? unSelectBiomechanismStock(stockroom.biomechanisms) : null"
        v-on:overHundred="$emit('overHundred')"
      )
      StockCard(
        :quantity='stockroom.processors'
        title='Процессор'
        :cost='cost.processor'
        v-on:sell="$store.commit('sellProcessor',cost.processor); (stockroom.processors < 4) ? unSelectProcessorStock(stockroom.processors) : null"
        v-on:overHundred="$emit('overHundred')"
      )
      StockCard(
        :quantity='stockroom.souls'
        title='Душа'
        :cost='cost.soul'
        v-on:sell="$store.commit('sellSoul',cost.soul); (stockroom.souls < 4) ? unSelectSoulStock(stockroom.souls) : null"
        v-on:overHundred="$emit('overHundred')"
      )
</template>

<script>
  import { mapState } from 'vuex';
  import StockCardVue from "./StockCard.vue";
  export default {
    data() {
      return {
        cost: {
          biomechanism: 5,
          processor: 3,
          soul: 15,
        }
      }
    },
    computed: {
      ...mapState([
        'stockroom',
      ]),
    },
    components: {
      'StockCard': StockCardVue,
    },
    methods: {
      unSelectBiomechanismStock: function(stockroom) {
        let difference = 4 - stockroom;
        switch (difference) {
          case 1 : this.$store.commit('unSelectedBiomechanism',3); break;
          case 2 : this.$store.commit('unSelectedBiomechanism',2); break;
          case 3 : this.$store.commit('unSelectedBiomechanism',1); break;
          case 4 : this.$store.commit('unSelectedBiomechanism',0); break;
        }
      },
      unSelectProcessorStock: function(stockroom) {
        let difference = 4 - stockroom;
        switch (difference) {
          case 1 : this.$store.commit('unSelectedProcessor',3); break;
          case 2 : this.$store.commit('unSelectedProcessor',2); break;
          case 3 : this.$store.commit('unSelectedProcessor',1); break;
          case 4 : this.$store.commit('unSelectedProcessor',0); break;
        }
      },
      unSelectSoulStock: function(stockroom) {
        let difference = 4 - stockroom;
        switch (difference) {
          case 1 : this.$store.commit('unSelectedSoul',3); break;
          case 2 : this.$store.commit('unSelectedSoul',2); break;
          case 3 : this.$store.commit('unSelectedSoul',1); break;
          case 4 : this.$store.commit('unSelectedSoul',0); break;
        }
      },
    },
  };
</script>