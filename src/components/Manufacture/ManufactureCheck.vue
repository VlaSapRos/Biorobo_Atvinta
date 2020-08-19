<template lang="html">
    <div class='checkboxs'>
        <div class=''>
            <svgBiomechanism 
                number='1'
                v-if='isBiomechanism'
            />

            <svgProcessor
                number='1'
                v-if='isProcessor'
            />

            <svgSoul 
                number='1'
                v-if='isSoul'
            /> 
        </div>
        <!-- <div>

        </div>
       
        <button 
            v-if="(count>=3)"
            class='checkbox'
            v-bind:class="{ 
                normal: (stock >= 3), 
                active: isActive, 
            }"
            :disabled="stock < 3"
        >
            <svgBiomechanism 
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isBiomechanism'
            /> 
            <svgProcessor
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isProcessor'
            /> 
            <scgSoul 
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isSoul'
            /> 
        </button>
        <button 
            v-if="(count>=4)"
            class='checkbox'
            v-bind:class="{ 
                normal: (stock >= 4), 
                active: isActive, 
            }"
            :disabled='stock < 4'
        >
            <svgBiomechanism 
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isBiomechanism'
            /> 
            <svgProcessor
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isProcessor'
            /> 
            <scgSoul 
                :fillOrange='fillOrange' 
                :fillWhite='fillWhite' 
                v-on:change-color="!fillOrange;!fillWhite"
                v-if='isSoul'
            /> 
        </button> -->
    </div>
</template>

<script>
    import { mapState } from 'vuex';
import ManufactureBiomechanismSVGVue from './ManufactureSVG/ManufactureBiomechanismSVG.vue';
import ManufactureProcessorSVGVue from './ManufactureSVG/ManufactureProcessorSVG.vue';
import ManufactureSoulSVGVue from './ManufactureSVG/ManufacturesoulSVG.vue';

    export default {
        data() {
            return {
                fillOrange: false,
                fillWhite: true,
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
        components: {
            svgBiomechanism: ManufactureBiomechanismSVGVue,
            svgProcessor: ManufactureProcessorSVGVue,
            svgSoul: ManufactureSoulSVGVue,
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

</style>