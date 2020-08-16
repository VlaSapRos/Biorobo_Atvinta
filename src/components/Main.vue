<template>
    <div>
        <!-- <div> 
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

        <button @click="$store.commit('subtractCoins',1)">-1</button>

        <br/>
        <button @click="$store.commit('createRobot',{costRobots:costRobots})">CREATE!</button>
        <p>{{ amountRobots }}</p> -->
        <header-component/>
        <wallet-component/>
        <market-component/>
        <stock-component/>
        <manufacturing-component/>
    </div>
</template>

<script>
    Vue.component('header-component', require('./Header.vue').default);
    Vue.component('wallet-component', require('./Wallet.vue').default);
    Vue.component('market-component', require('./Market/Market.vue').default);
    Vue.component('stock-component', require('./Stock/Stock.vue').default);
    Vue.component('manufacturing-component', require('./Manufacture/Manufacture.vue').default);
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