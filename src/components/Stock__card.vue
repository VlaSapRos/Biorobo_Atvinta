<template lang="html">
    <div class='card'>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h1>{{ count }}</h1>
        <button class='button'>Продать</button>
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
            title: '',
            subtitle: '',
            count: 0,
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
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
    }
    h2 {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #A3B8CC;
    }
    .card {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .button {
        width: 200px;
        height: 48px;
        filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
        border-radius: 60px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
    }
</style>