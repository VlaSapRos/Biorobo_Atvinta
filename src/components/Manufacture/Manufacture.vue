<template lang="html">
    <div>
        {{ countBiomechanisms }}
        {{ countProcessors }}
        {{ countSouls }}
        {{ isBeCreate  }}
        <h1>Производство</h1>
        <div class="manufacturing">
            <div class='conteiner'>
                <ManufactureRadio
                    title='Тип биоробота'
                    name='type'
                    value1 = 'FrontEnd'
                    value2 = 'Design'
                />
                <ManufactureRadio
                    title='Стабилизатор'
                    name='gender'
                    value1 = 'Male'
                    value2 = 'Female'
                />
                <button 
                    class='button'
                    v-bind:class="{active: isBeCreate}"
                    :disabled='!isBeCreate'
                    @click="createRobot()"
                    >Произвести за 10 монет</button>
            </div>
            <div class='conteiner'>
                <ManufactureCheck 
                    count='4'
                    isBiomechanism='true'
                    :stock="stockroom.biomechanisms"
                    v-on:count="countBiomechanisms+=$event"
                />
                <ManufactureCheck 
                    count='4'
                    isProcessor='true'
                    :stock="stockroom.processors"
                    v-on:count="countProcessors+=$event"
                />
                <ManufactureCheck 
                    count='1'
                    isSoul='true'
                    :stock="stockroom.souls"
                    v-on:count="countSouls+=$event"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ManufactureRadioVue from './ManufactureRadio.vue';
import ManufactureCheckVue from './ManufactureCheck.vue';

    export default {
        data(){
            return {
                costRobot: {
                    biomechanisms:4,
                    processors:4,
                    souls:1,
                },
                isBeCreated: false,
                countBiomechanisms:0,
                countProcessors:0,
                countSouls:0,
            }
        },
        methods: {
            createRobot : function () {
                if(this.costRobot.biomechanisms <= this.stockroom.biomechanisms 
                && this.costRobot.processors <= this.stockroom.processors 
                && this.costRobot.souls <= this.stockroom.souls) 
                {this.$store.commit('createRobot',this.costRobot)}
            }
        },
        components: {
            'ManufactureRadio': ManufactureRadioVue,
            'ManufactureCheck': ManufactureCheckVue,
        },
        computed: {
            ...mapState([
                'stockroom',
                'amountCoins',
            ]),
            isBeCreate() {
                if (this.amountCoins >= 10 
                && this.costRobot.biomechanisms == this.countBiomechanisms 
                && this.costRobot.processors == this.countProcessors 
                && this.costRobot.souls == this.countSouls
                && this.costRobot.biomechanisms <= this.stockroom.biomechanisms 
                && this.costRobot.processors <= this.stockroom.processors 
                && this.costRobot.souls <= this.stockroom.souls) {
                    return true
                }
                else { return false}
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
        color: #ffffff;
        border:2px solid #FF7F22; 
        background-color: #222B33;
    }
    .button:disabled {
        background-color: #222B33;
        border: 2px solid #4C5865;
        color: #4C5865;
    }
</style>