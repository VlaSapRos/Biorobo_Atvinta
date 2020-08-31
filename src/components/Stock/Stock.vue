<template lang="pug">
  div(class="block")
    h1(class='rubric') Склад
    div(class='conteiner')
      StockCard(
            :quantity='stockroom.biomechanisms'
            title='Биомеханизм'
            :cost='cost.biomechanism'
            v-on:sell="$store.commit('sellBiomechanism',cost.biomechanism)"
            v-on:overHundred="$emit('overHundred')"
      )
      StockCard(
            :quantity='stockroom.processors'
            title='Процессор'
            :cost='cost.processor'
            v-on:sell="$store.commit('sellProcessor',cost.processor)"
            v-on:overHundred="$emit('overHundred')"
      )
      StockCard(
            :quantity='stockroom.souls'
            title='Душа'
            :cost='cost.soul'
            v-on:sell="$store.commit('sellSoul',cost.soul)"
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
                'amountCoins',
            ]),
        },
        components: {
            'StockCard': StockCardVue,
        },
    };
</script>

<style lang="scss" scoped>

</style>