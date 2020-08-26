<template lang="html">
    <div class='card'>
        <h1 class='cardTitle'>{{ title }}</h1>
        <h2 class='cardSubtitle  cardSubtitle_Stock'>Стоимость: {{ cost }} монет</h2>
        <h1 class='quantity'>{{ quantity }} шт</h1>
        <div class='buttonSellBorder'>
            <button 
                :disabled='quantity < 1'
                class = 'buttonSell' 
                v-bind:class="{ active: (count > 0) }"
                v-on:click="$emit((amountCoins+cost <= 100) ? 'sell' : 'overHundred')"
            >Продать</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        props: {
            title: '',
            quantity: 0,
            cost: 0,
            thing: '',
        },
        computed: {
            ...mapState([
                'amountCoins',
            ]),
        },
    }
</script>

<style lang="scss" scoped>
    .quantity {
        width: 236px;
        height: 24px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 24px;
    }
    .cardSubtitle_Stock {
        margin-bottom: 15px;
    }
    .card {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .buttonSellBorder{
        background: linear-gradient(180deg, #22B3E3 0%,#7CDAF9 50%, #22B3E3 100%);
    }
    .buttonSell {
        width: 200px;
        height: 48px;
        border-radius: 60px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #7CDAF9;
        border: 2px solid ;
        border-color: transparent ;
        background-color: transparent;
    }
    .active {
    }
    .button:disabled{
        border: 2px solid #4C5865;
        color: #4C5865;
    }
</style>