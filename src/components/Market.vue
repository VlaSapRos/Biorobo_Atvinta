<template lang="html">
    <div>
        <h1>Рынок комплектующих</h1>
        <div class="market">
        <card-component 
            pic='/assets/img/biomechanism.svg'
            title='Биомеханизм'
            subtitle='Стоимость: 7 монет'
            buttonValue = 'Установить'
        />
        <card-component 
            pic='/assets/img/processor.svg'
            title='Процессор'
            subtitle='Стоимость: 5 монет'
            buttonValue = 'Установить'
        />
        <card-component 
            pic='/assets/img/soul.svg'
            title='Душа'
            subtitle='Стоимость: 25 монет'
            buttonValue = 'Установить'
        />
        </div>
    </div>
</template>

<script>
    Vue.component('card-component', require('./Market__card.vue').default);
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