<template lang="html">
    <div class='card'>
        <h1>{{ title }}</h1>
        <h2>Стоимость: {{ cost }} монет</h2>
        <h1>{{ count }}</h1>
        <button @click="$store.commit('sell',{thing:thing,cost:+cost})"
            :disabled='count < 1'
            class = 'button' 
            v-bind:class="{ active: (count > 0) }"
        >Продать</button>
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
            count: 0,
            cost: 0,
            thing: '',
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
        border-radius: 60px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #7CDAF9;
        background-color: #222B33;
    }
    .active {
        border: 2px solid #7CDAF9
    }
    .button:disabled{
        border: 2px solid #4C5865;
        color: #4C5865;
    }
</style>