<template lang="html">
    <div class="market">
        <card-component 
            pic='/assets/img/biomechanism.svg'
            title='Биомеханизм'
        />
        <card-component 
            pic='/assets/img/processor.svg'
            title='Процессор'
        />
        <card-component 
            pic='/assets/img/soul.svg'
            title='Душа'
        />
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
        props: {
            pic: null,
            title: '',
            subtitle: '',
            count: 0,
            button: null,
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
    .market {
        justify-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>