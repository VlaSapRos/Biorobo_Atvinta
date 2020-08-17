<template lang="html">
    <div>
        <h1>Рынок комплектующих</h1>
        <div class="market">
        <MarketCard 
            pic='/assets/img/biomechanism/biomechanism_market.svg'
            title='Биомеханизм'
            buttonValue = 'Установить'
            :cost = 'cost.biomechanism'
            v-on:buy="$store.commit('buyBiomechanism',7)"
        />
        <MarketCard 
            pic='/assets/img/processor/processor_market.svg'
            title='Процессор'
            buttonValue = 'Установить'
            :cost = 'cost.processor'
            v-on:buy="$store.commit('buyProcessor',5)"
        />
        <MarketCard 
            pic='/assets/img/soul/soul_market.svg'
            title='Душа'
            buttonValue = 'Установить'
            :cost = 'cost.soul'
            v-on:buy="$store.commit('buySoul',25)"
        />
        </div>
    </div>
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
    .market {
        justify-content: space-between;
        align-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>