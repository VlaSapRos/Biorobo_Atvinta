<template lang="html">
    <div>
        <h1>Производство</h1>
        <div class="manufacturing">
            <div class='conteiner'>
                <radio-component 
                    title='Тип биоробота'
                    name='type'
                    value1 = 'FrontEnd'
                    value2 = 'Design'
                />
                <radio-component 
                    title='Стабилизатор'
                    name='gender'
                    value1 = 'Male'
                    value2 = 'Female'
                />
                <button 
                    class='button'
                    v-bind:class="{active: (amountCoins >= 10)}"
                    :disabled='amountCoins < 10'
                >Произвести за 10 монет</button>
            </div>
            <div class='conteiner'>
                <check-component 
                    count='4'
                    isBiomechanism='true'
                    :stock="stock.biomechanisms"
                    imgNormal='/assets/img/biomechanism/biomechanism.svg'
                    imgActive='/assets/img/biomechanism/biomechanism_active.svg'
                    imgDisabled='/assets/img/biomechanism/biomechanism_disable.svg'
                />
                <check-component 
                    count='4'
                    isProcessor='true'
                    :stock="stock.processors"
                    imgNormal='/assets/img/processor/processor.svg'
                    imgActive='/assets/img/processor/processor_active.svg'
                    imgDisabled='/assets/img/processor/processor_disable.svg'
                />
                <check-component 
                    count='1'
                    isSoul='true'
                    :stock="stock.souls"
                    imgNormal='/assets/img/soul/soul.svg'
                    imgActive='/assets/img/soul/soul_active.svg'
                    imgDisabled='/assets/img/soul/soul_disable.svg'
                />
            </div>
        </div>
    </div>
</template>

<script>
    Vue.component('radio-component', require('./Manufacture__radio.vue').default);
    Vue.component('check-component', require('./Manufacture__check.vue').default);
    export default {
        data() {
            return {
                checked:false,
            }
        },
        computed: {
            coinsText() {
                this.$store.commit('coinsDeclination');
                return this.$store.getters.showCoinsText;
            },
            amountCoins() {
                return this.$store.getters.showAmountCoins;
            },
            stock() {
                return this.$store.getters.showStockroom
            },
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        left: 0;
        top: 0;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #FFFFFF;
    }
    .manufacturing {
        justify-content: space-between;
        flex-direction: row;
        align-content: center;
        align-items: center;
        display:flex;
        width: 1016px;
        padding: 0px 106px;
    }
    .conteiner{
        display: flex;
        flex-direction: column;
    }
    .button {
        width: 236px;
        height: 48px;
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
    .button:disabled {
        background-color: #222B33;
        border: 2px solid #4C5865;
        color: #4C5865;
    }
</style>