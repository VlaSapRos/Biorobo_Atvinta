<template lang="html">
    <div class='radio'>
        <h1>{{ title }}</h1>
        <div class='conteiner'>
            <p><input type='radio' :name='name'>{{value1}}</p>
            <p><input type='radio' :name='name'>{{value2}}</p>
        </div>
    </div>
</template>
        // 
<script>
    export default {
        props: {
            title: '',
            name: '',
            value1: '',
            value2: '',
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
    .radio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .conteiner {
        display: flex;
        flex-direction: row;
    }
</style>