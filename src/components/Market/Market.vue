<template lang="html">
    <div>
        <h1>Рынок комплектующих</h1>
        <div class="market">
        <MarketCard 
            pic='/assets/img/biomechanism.svg'
            title='Биомеханизм'
            buttonValue = 'Установить'
            cost = 7
            thing = 'biomechanisms'
        />
        <MarketCard 
            pic='/assets/img/processor.svg'
            title='Процессор'
            buttonValue = 'Установить'
            cost = 5
            thing = 'processors'
        />
        <MarketCard 
            pic='/assets/img/soul.svg'
            title='Душа'
            buttonValue = 'Установить'
            cost = 25
            thing = 'souls'
        />
        </div>
    </div>
</template>

<script>
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
            amountCoins() {
                return this.$store.getters.showAmountCoins;
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
    .market {
        justify-content: space-between;
        align-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>