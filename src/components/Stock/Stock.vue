<template lang="html">
    <div class="stock">
        <h1 class='rubric'>Склад</h1>
        <div class='conteiner'>
        <StockCard 
            :count='stockroom.biomechanisms'
            title='Биомеханизм'
            :cost='cost.biomechanism'
            v-on:sell="$store.commit('sellBiomechanism',cost.biomechanism)"
        />
        <StockCard 
            :count='stockroom.processors'
            title='Процессор'
            :cost='cost.processor'
            v-on:sell="$store.commit('sellProcessor',cost.processor)"
        />
        <StockCard 
            :count='stockroom.souls'
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
    .stock {
        padding-left: 130px;
        padding-right: 130px;
    }
</style>