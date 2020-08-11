<template>
    <div>
        <h1> Amount Coins, {{amountCoins}} </h1>
        <div> 
            <h2>Stockroom</h2>
            <ul>
                <li> {{ stockroom.biomechanisms }} </li>
                <li> {{ stockroom.processors }} </li>
                <li> {{ stockroom.souls }} </li>
            </ul>
        </div>
        <button @click="$store.commit('addCoins',1)">+1</button>
        <button @click="$store.commit('subtractCoins',1)">-1</button>
        <button @click="$store.commit('buy',10)">buy</button>
        <button @click="$store.commit('sell',10)">sell</button>

    </div>
</template>

<script>
    export default {
        computed: {
            amountCoins() {
                return this.$store.getters.showAmountCoins
            },
            stockroom() {
                return this.$store.getters.showStockroom
            }
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        background-color: burlywood;
        color: blue
    }
    h2 {
        background-color: burlywood;
        color: blue
    }
</style>