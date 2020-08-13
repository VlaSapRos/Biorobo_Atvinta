<template lang="html">
    <div class="market">
        <card-component pic='/assets/img/biomechanism.svg'/>
        <card-component pic='/assets/img/processor.svg'/>
        <card-component pic='/assets/img/soul.svg'/>
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
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    
</style>