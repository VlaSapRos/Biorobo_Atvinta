<template lang="html">
    <div class="block">
        <h1 class='rubric'>Производство</h1>
        <div class='conteiner conteiner_Manufacture'>
            <div class='conteiner_column conteiner_columnManufacture'>
                <ManufactureRadio
                    title='Тип биоробота:'
                    name='type'
                    value1 = 'FrontEnd'
                    value2 = 'Design'
                    v-on:roboTypeChange='roboType.type=$event'
                />
                <ManufactureRadio
                    title='Стабилизатор:'
                    name='gender'
                    value1 = 'Male'
                    value2 = 'Female'
                    v-on:roboTypeChange='roboType.stabilizer=$event'
                />
                <button 
                    class='buttonCreate'
                    v-bind:class="{active: isBeCreate}"
                    :disabled='!isBeCreate'
                    @click="createRobot()"
                    >Произвести за 10 монет</button>
            </div>
            <div class='conteiner_column conteiner_columnManufacture' style='padding-top:9px'>
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
            <div class='notEnough'>
                {{notEnough}}
            </div>
            </div>
            <div class='conteiner_column conteiner_columnManufacture'>
            <ManufactureSilhouette 
                :stabilizer='roboType.stabilizer' 
                :type='roboType.type'
                :isBeCreate='isBeCreate'
                :robotCreated='robotIsCreated'
            />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ManufactureRadioVue from './ManufactureRadio.vue';
import ManufactureCheckVue from './ManufactureCheck.vue';
import ManufactureSilhouetteVue from './ManufactureSilhouette.vue';
    export default {
        data(){
            return {
                costRobot: {
                    biomechanisms:4,
                    processors:4,
                    souls:1,
                    coins:10,
                },
                countBiomechanisms:0,
                countProcessors:0,
                countSouls:0,
                roboType:{
                    stabilizer: 'Male',
                    type: 'FrontEnd',
                },
                robotIsCreated: false,
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
                this.robotIsCreated = true;
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
                else { return false }
            },
            notEnough() {
                //notEnoughText разбит на 4 части
                let part1 = '';
                let part2 = '';
                let part3 = '';
                let part4 = '';
                let forIf = this.amountCoins < 10 || this.costRobot.biomechanisms !== this.countBiomechanisms || this.costRobot.processors !== this.countProcessors || this.costRobot.souls !== this.countSouls
                if (forIf) {
                    let biomech = this.costRobot.biomechanisms-this.countBiomechanisms 
                    let procc = this.costRobot.processors-this.countProcessors 
                    let sou = this.costRobot.souls-this.countSouls 
                    let co = this.costRobot.coins - this.amountCoins 
                    if (biomech == 1) {part1 = ' биомеханизма'}
                    else if (biomech == 0) {part1 = ''}
                    else {part1 = ` ${biomech} биомеханизмов`}

                    if (procc == 1) {part2 = ' процессора'}
                    else if (procc == 0) {part2 = ''}
                    else {part2 = ` ${procc} процессоров`}

                    if (sou == 1) {part3 = ' души'}
                    else if (sou == 0) {part3 = ''}
                    else {part3 = ` ${sou} душ`}

                    if (co > 0) {part4 = ' денег'}
                    
                    if(part1 !== '' && part2 !== '' && part3 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ',' + part3 + ' и' + part4}
                    else if (part1 !== '' && part2 !== '' && part3 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ' и' + part3}
                    else if (part1 !== '' && part2 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ' и' + part4}
                    else if (part1 !== '' && part3 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ',' + part3 + ' и' + part4}
                    else if (part2 !== '' && part3 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part2 + ',' + part3 + ' и' + part4}
                    else if (part1 !== '' && part2 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ' и' + part2}
                    else if (part1 !== '' && part3 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ' и' + part3}
                    else if (part1 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part1 + ' и' + part4}
                    else if (part2 !== '' && part3 !== ''){
                        return 'Для производства биоробота не хватает' + part2 + ' и' + part3}
                    else if (part2 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part2 + ' и' + part4}
                    else if (part3 !== '' && part4 !== ''){
                        return 'Для производства биоробота не хватает' + part3 + ' и' + part4}
                    else if (part1 !== ''){
                        return 'Для производства биоробота не хватает' + part1}
                    else if (part2 !== ''){
                        return 'Для производства биоробота не хватает' + part2}
                    else if (part3 !== ''){
                        return 'Для производства биоробота не хватает' + part3}
                    else if (part4 !== ''){
                        return 'Для производства биоробота не хватает' + part4}
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .rubric_Manufacture {
        line-height: 72px;
        height: 72px;
    }
    .conteiner_Manufacture {
        height: 320px;
    }
    .buttonCreate {
        width: 236px;
        height: 48px;
        border:2px solid #FF7F22; 
        border-radius: 60px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        background-color: transparent;
        margin-top:55px;
    }
    .buttonCreate:hover {
        background: #FF5722;
        border:2px solid #FF5722; 
    }
    .buttonCreate:active {
        background: #FF7F22;
        border:2px solid #FF7F22; 
    }
    .buttonCreate:disabled {
        background-color: transparent;
        border: 2px solid #4C5865;
        color: #4C5865;
    }
    .conteiner_columnManufacture {
        justify-content: start;
        align-items: start;
        height: 327px;
        width: 236px;
    }
    .notEnough {
        width: 195px;
        height: 48px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #A3B8CC;
        margin-top: 45px;
        padding: 0;
    }
</style>