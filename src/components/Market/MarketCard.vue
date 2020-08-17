<template lang="html">
    <div class='card'>
        <img :src="pic" width="236" height="128">
        <h1>{{ title }}</h1>
        <h2>Стоимость: {{ cost }} монет</h2>
        <button 
            :disabled='amountCoins < cost'
            class = 'button' 
            v-bind:class="{ active: (amountCoins >= cost) }"
            v-on:click="$emit('buy')"
        >
        Установить</button>
    </div>
</template>
        // 
<script>
    import { mapState } from 'vuex';

    export default {
        props: {
            pic: null,
            title: '',
            subtitle: '',
            cost: 0,
        },
        computed: {
            ...mapState([
                'amountCoins',
            ]),
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
        background: linear-gradient(180deg, #4C5865 0%,#4C5865 100%);
        border-radius: 60px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
    }
    .active {
        background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
    }
</style>