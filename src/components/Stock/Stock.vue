<template lang="html">
    <div class="block">
        <h1 class='rubric'>Склад</h1>
        <div class='conteiner'>
        <StockCard 
            :quantity='stockroom.biomechanisms'
            title='Биомеханизм'
            :cost='cost.biomechanism'
            v-on:sell="$store.commit('sellBiomechanism',cost.biomechanism)"
        />
        <StockCard 
            :quantity='stockroom.processors'
            title='Процессор'
            :cost='cost.processor'
            v-on:sell="$store.commit('sellProcessor',cost.processor)"
        />
        <StockCard 
            :quantity='stockroom.souls'
            title='Душа'
            :cost='cost.soul'
            v-on:sell="$store.commit('sellSoul',cost.soul)"
        />
        </div>
    </div>
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
    };
</script>

<style lang="scss" scoped>

</style>