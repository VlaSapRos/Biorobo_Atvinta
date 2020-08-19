<template lang='html'>
    <div>
        <Example/>
        <MyHeader/>
        <Wallet 
            v-on:addCoins="$store.commit('addCoins',($event) ? 5 : 1)" 
            v-on:overHundred=""/>
        <Market/>
        <Stock/>
        <Manufacture/>
    </div>
</template>

<script>
import ExampleVue from './Example.vue';
import MyHeaderVue from './MyHeader.vue';
import WalletVue from './Wallet.vue';
import MarketVue from './Market/Market.vue';
import StockVue from './Stock/Stock.vue';
import ManufactureVue from './Manufacture/Manufacture.vue';

export default {
    components: {
        'Example': ExampleVue,
        'MyHeader': MyHeaderVue,
        'Wallet': WalletVue,
        'Market': MarketVue,
        'Stock': StockVue,
        'Manufacture': ManufactureVue,  
    },
}
</script>

<style lang="scss" scoped>
    div {
        width: 1016px;
        display: flex;
        flex-direction: column;
    }

    h1 {
        background-color: burlywood;
        color: blue
    }

    h2 {
        background-color: burlywood;
        color: blue
    }

</style>