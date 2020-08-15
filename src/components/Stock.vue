<template lang="html">
    <div>
        <h1>Склад</h1>
        <div class="stock">
        <stockCard-component 
            :count='stock.biomechanisms'
            title='Биомеханизм'
            cost=5
            thing='biomechanisms'
        />
        <stockCard-component 
            :count='stock.processors'
            title='Процессор'
            cost=3
            thing='processors'
        />
        <stockCard-component 
            :count='stock.souls'
            title='Душа'
            cost=15
            thing='souls'
        />
        </div>
    </div>
</template>

<script>
    Vue.component('stockCard-component', require('./Stock__card.vue').default);
    export default {
        data() {
            return {
                checked:false,
            }
        },
        computed: {
            coinsText() {
                this.$store.commit('coinsDeclination');
                return this.$store.getters.showCoinsText;
            },
            stock() {
                return this.$store.getters.showStockroom
            },
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
    .stock {
        justify-content: space-between;
        align-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>