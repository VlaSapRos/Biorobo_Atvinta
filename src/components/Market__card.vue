<template lang="html">
    <div>
        <img :src="pic">
        <h1>{{ title }}</h1>
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
    
    
</style>