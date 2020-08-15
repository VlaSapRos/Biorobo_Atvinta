<template lang="html">
    <div class='checkboxs'>
        <input 
            type='checkbox' 
            v-if="(count>=1)"
            class='checkbox'
            v-bind:class="{ biomechanism: isBiomechanism, processor: isProcessor, soul: isSoul }"
        >
        <input 
            type='checkbox' 
            v-if="(count>=2)"
            class='checkbox'
            v-bind:class="{ biomechanism: isBiomechanism, processor: isProcessor, soul: isSoul }"
        >
        <input 
            type='checkbox' 
            v-if="(count>=3)"
            class='checkbox'
            v-bind:class="{ biomechanism: isBiomechanism, processor: isProcessor, soul: isSoul }"
        >
        <input 
            type='checkbox' 
            v-if="(count>=4)"
            class='checkbox'
            v-bind:class="{ 
                biomechanism: isBiomechanism,
                processor: isProcessor, 
                soul: isSoul, 
                normal: (), 
                active: isActive, 
            }"
            :disable=""
        >
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isNormal:false,
                ifActive:false,
            }
        },
        props: {
            title: '',
            name: '',
            count: 0,
            value2: '',
            isBiomechanism: false,
            isProcessor: false,
            isSoul: false,
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
    .checkboxs {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }
    .conteiner {
        display: flex;
        flex-direction: row;
    }
    .checkbox {
        background-color: #333940;
        border-radius: 40px;
        width: 48px;
        height: 48px;
    }
    .biomechanism {

    }
    .processor {

    }
    .soul {

    }
</style>