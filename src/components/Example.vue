<template>
    <div>
        <h1> Example, {{amountCoins}} </h1>
        <button @click="$store.commit('addCoins',1)">+1</button>
        <button @click="$store.commit('subtractCoins',1)">-1</button>
    </div>
</template>

<script>
    export default {
        computed: {
            amountCoins() {
                return this.$store.getters.showAmountCoins
            }
        },
        methods: {
            addCoins() {
                this.$store.dispatch('addCoins',1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        background-color: burlywood;
        color: blue
    }
</style>