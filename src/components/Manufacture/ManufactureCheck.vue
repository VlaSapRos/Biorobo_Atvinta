<template lang="html">
    <div class='checkboxs'>
            <svgBiomechanism 
                number='1'
                v-if='isBiomechanism && count >= 1'
                v-on:count="$emit('count',$event)"
            />
            <svgProcessor
                number='1'
                v-if='isProcessor && count >= 1'
                v-on:count="$emit('count',$event)"
            />
            <svgSoul 
                number='1'
                v-if='isSoul && count >= 1'
                v-on:count="$emit('count',$event)"
            />

            <svgBiomechanism 
                number='2'
                v-if='isBiomechanism && count >= 2'
                v-on:count="$emit('count',$event)"
            />
            <svgProcessor
                number='2'
                v-if='isProcessor && count >= 2'
                v-on:count="$emit('count',$event)"
            />
            <svgSoul 
                number='2'
                v-if='isSoul && count >= 2'
                v-on:count="$emit('count',$event)"
            /> 

            <svgBiomechanism 
                number='3'
                v-if='isBiomechanism && count >= 3'
                v-on:count="$emit('count',$event)"
            />
            <svgProcessor
                number='3'
                v-if='isProcessor && count >= 3'
                v-on:count="$emit('count',$event)"
            />
            <svgSoul 
                number='3'
                v-if='isSoul && count >= 3'
                v-on:count="$emit('count',$event)"
            /> 

            <svgBiomechanism 
                number='4'
                v-if='isBiomechanism && count >= 4'
                v-on:count="$emit('count',$event)"
            />
            <svgProcessor
                number='4'
                v-if='isProcessor && count >= 4'
                v-on:count="$emit('count',$event)"
            />
            <svgSoul 
                number='4'
                v-if='isSoul && count >= 4'
                v-on:count="$emit('count',$event)"
            /> 
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import ManufactureBiomechanismSVGVue from './ManufactureSVG/ManufactureBiomechanismSVG.vue';
    import ManufactureProcessorSVGVue from './ManufactureSVG/ManufactureProcessorSVG.vue';
    import ManufactureSoulSVGVue from './ManufactureSVG/ManufactureSoulSVG.vue';

    export default {
        data() {
            return {

            }
        },
        props: {
            count: 0,
            isBiomechanism: false,
            isProcessor: false,
            isSoul: false,
        },
        components: {
            svgBiomechanism: ManufactureBiomechanismSVGVue,
            svgProcessor: ManufactureProcessorSVGVue,
            svgSoul: ManufactureSoulSVGVue,
        },
    }
</script>

<style lang="scss" scoped>
    .checkboxs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 222px;
        margin-bottom: 16px;
    }
</style>