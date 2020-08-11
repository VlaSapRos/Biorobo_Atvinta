<template>
    <div>
        <h1> Amount Coins, {{amountCoins}} </h1>
        <div> 
            <h2>Stockroom</h2>
            <ul>
                <li> 
                    biomechanisms:
                    {{ stockroom.biomechanisms }}
                    <button @click="$store.commit('buy',{thing:'biomechanisms',cost:10})">buy</button>
                    <button @click="$store.commit('sell',{thing:'biomechanisms',cost:10})">sell</button>
                </li>
                <li> 
                    processors:
                    {{ stockroom.processors }} 
                    <button @click="$store.commit('buy',{thing:'processors',cost:10})">buy</button>
                    <button @click="$store.commit('sell',{thing:'processors',cost:10})">sell</button>
                </li>
                <li> 
                    souls:
                    {{ stockroom.souls }} 
                    <button @click="$store.commit('buy',{thing:'souls',cost:10})">buy</button>
                    <button @click="$store.commit('sell',{thing:'souls',cost:10})">sell</button>
                </li>
            </ul>
        </div>
        <button @click="$store.commit('addCoins',1)">+1</button>
        <button @click="$store.commit('subtractCoins',1)">-1</button>
        <button @click="$store.commit('buy',10)">buy</button>
        <button @click="$store.commit('sell',{thing:'souls',cost:10})">sell</button>

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