<template lang="html">
    <div class="block">
        <h1 class='rubric'>Рынок комплектующих</h1>
        <div class="conteiner">
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
    .market {
        padding-left: 130px;
        padding-right: 130px;
        width: 1016px;
    }
    
</style>