<template lang="html">
    <div class='checkboxs'>
        <button 
            v-if="(count>=1)"
            class='checkbox'
            v-bind:class="{ 
                biomechanism: isBiomechanism,
                processor: isProcessor, 
                soul: isSoul, 
                normal: (stock >= 1), 
                active: isActive, 
            }"
            :disabled="stock < 1"
        ><img :src='imgNormal'></button>
        <button 
            v-if="(count>=2)"
            class='checkbox'
            v-bind:class="{ 
                biomechanism: isBiomechanism,
                processor: isProcessor, 
                soul: isSoul, 
                normal: (stock >= 2), 
                active: isActive, 
            }"
            :disabled='stock < 2'
        ><img :src='imgNormal'></button>
        <button 
            v-if="(count>=3)"
            class='checkbox'
            v-bind:class="{ 
                biomechanism: isBiomechanism,
                processor: isProcessor, 
                soul: isSoul, 
                normal: (stock >= 3), 
                active: isActive, 
            }"
            :disabled="stock < 3"
        ><img :src='imgNormal'></button>
        <button 
            v-if="(count>=4)"
            class='checkbox'
            v-bind:class="{ 
                biomechanism: isBiomechanism,
                processor: isProcessor, 
                soul: isSoul, 
                normal: (stock >= 4), 
                active: isActive, 
            }"
            :disabled='stock < 4'
        ><img :src='imgNormal'></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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
            isNormal:true,
            isActive:false,
            stock: 0,
            imgNormal: '',
            imgActive: '',
            imgDisabled: '',
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
        border-radius: 4px;
        width: 48px;
        height: 48px;
    }
    .active {
        border: 2px solid #FF7F22;
    }
    .normal {
        border: 2px solid white;
    }
    .biomechanism {

    }
    .processor {

    }
    .soul {

    }
    .checkbox:disabled {
        border: 2px solid #333940;
    }
</style>