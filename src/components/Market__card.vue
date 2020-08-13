<template lang="html">
    <div class='card'>
        <img :src="pic" width="236" height="128">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h3>{{ count }}</h3>
        <button class='buyButton' @click='buttonOnClick'>{{ buttonValue }}</button>
    </div>
</template>

<script>
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
            buttonOnClick: null,
            buttonValue: null,
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
        font-size: 20px;
    }
    .card {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .buyButton {
        width: 100px;
        height: 100px;
        background-color: orange;
    }
    
</style>