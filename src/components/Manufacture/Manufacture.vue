<template lang="html">
    <div class="manufacture">
        <h1 class='rubric'>Производство</h1>
        <div class='conteiner'>
            <div class='conteiner conteiner_column'>
                {{roboType}}
                <ManufactureRadio
                    title='Тип биоробота'
                    name='type'
                    value1 = 'FrontEnd'
                    value2 = 'Design'
                    v-on:roboTypeChange='roboType.type=$event'
                />
                <ManufactureRadio
                    title='Стабилизатор'
                    name='gender'
                    value1 = 'Male'
                    value2 = 'Female'
                    v-on:roboTypeChange='roboType.stabilizer=$event'
                />
                <button 
                    class='button'
                    v-bind:class="{active: isBeCreate}"
                    :disabled='!isBeCreate'
                    @click="createRobot()"
                    >Произвести за 10 монет</button>
            </div>
            <div class='conteiner conteiner_column'>
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
            <ManufactureSilhouette :roboType='roboType'/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ManufactureRadioVue from './ManufactureRadio.vue';
import ManufactureCheckVue from './ManufactureCheck.vue';
import ManufactureSilhouetteVue from './ManufactureSilhouette.vue';
import { MALE, FAMALE, FRONTEND, DESIGN } from '../../const.js'
    export default {
        data(){
            return {
                costRobot: {
                    biomechanisms:4,
                    processors:4,
                    souls:1,
                    coins:10,
                },
                isBeCreated: false,
                countBiomechanisms:0,
                countProcessors:0,
                countSouls:0,
                roboType:{
                    stabilizer: MALE,
                    type: FRONTEND,
                }

            }
        },
        methods: {
            createRobot : function () {
                if(this.costRobot.biomechanisms <= this.stockroom.biomechanisms 
                && this.costRobot.processors <= this.stockroom.processors 
                && this.costRobot.souls <= this.stockroom.souls) {
                    this.$emit('robotCreated');   
                    this.$store.commit('createRobot',this.costRobot);
                }
            }
        },
        components: {
            'ManufactureRadio': ManufactureRadioVue,
            'ManufactureCheck': ManufactureCheckVue,
            'ManufactureSilhouette': ManufactureSilhouetteVue
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
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .manufacture {
        display:flex;
        justify-content: space-between;
        flex-direction: column;
        align-content: center;
        align-items: center;
        width: 1016px;
        padding: 0px 106px;
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