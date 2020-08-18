<template lang="html">
    <div>
        <h1>Склад</h1>
        <div class="stock">
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
    h1 {
        left: 0;
        top: 0;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #FFFFFF;
    }
    .stock {
        justify-content: space-between;
        align-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>