<template lang="html">
    <div>
        <h1>Склад</h1>
        <div class="stock">
        <StockCard 
            :count='stockroom.biomechanisms'
            title='Биомеханизм'
            cost=5
            thing='biomechanisms'
        />
        <StockCard 
            :count='stockroom.processors'
            title='Процессор'
            cost=3
            thing='processors'
        />
        <StockCard 
            :count='stockroom.souls'
            title='Душа'
            cost=15
            thing='souls'
        />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import StockCardVue from "./StockCard.vue";
    export default {
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