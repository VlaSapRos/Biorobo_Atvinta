<template lang="html">
    <div>
        <h1>Кошелёк криптоволют</h1>
        <h1> {{ amountCoins + ' biorobo ' + coinsText }} </h1>
        <button @click="$store.commit('addCoins',checked)">Нацыганить!</button>
        <input type="checkbox" id="checkbox" v-model="checked"> 
        <h2>Цыганить по 5 монет</h2>
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
                return this.$store.getters.showCoinsText
            },
            amountCoins() {
                return this.$store.getters.showAmountCoins
            },
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */
        color: #FFFFFF;
    }
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        color: #FFFFFF;
    }
</style>