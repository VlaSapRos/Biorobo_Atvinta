<template lang="html">
    <div class='card'>
        <div class='picture' v-bind:style="{backgroundImage:pic}"></div>
        <h1 class='title'>{{ title }}</h1>
        <h2 class='subtitle'>Стоимость: {{ cost }} монет</h2>
        <button 
            :disabled='amountCoins < cost'
            class = 'buttonInstall' 
            v-bind:class="{ active: (amountCoins >= cost) }"
            v-on:click="$emit('buy')"
        >
        Установить</button>
    </div>
</template>

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

    .picture {
        position: absolute;
        left: -22.5px;
        top: -72.5px;
        width: 281px;
        height: 281px;
        background-position: center;
    }

    .title {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        height: 32px;
        margin-bottom: 5px;
    }

    .subtitle {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #A3B8CC;
        margin-bottom: 24px;
    }

    .buttonInstall {
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
        border: none;
    }

    .active {
        background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
    }

    .button:hover {
        background: linear-gradient(180deg, #FF5722 0%, #FF5722 100%);
    }

    .button:active {
        background: linear-gradient(180deg, #FF7F22 0%, #FF7F22 100%);
    }

    .button:disabled {
        color: #7D90A6;
    }

    .card {
        position: relative;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 286px;
        width: 236px;
        padding-top: 153px;
    }



</style>

