<template lang="pug">
  div(class='checkboxs')
    svgBiomechanism( :setToZero='setToZero' number='1' v-if="isBiomechanism && count >= 1" v-on:count="$emit('count',$event)")
    svgProcessor( :setToZero='setToZero' number='1' v-if='isProcessor && count >= 1' v-on:count="$emit('count',$event)")
    svgSoul( :setToZero='setToZero' number='1' v-if='isSoul && count >= 1' v-on:count="$emit('count',$event)")
    svgBiomechanism( :setToZero='setToZero' number='2' v-if='isBiomechanism && count >= 2' v-on:count="$emit('count',$event)")
    svgProcessor( :setToZero='setToZero' number='2' v-if='isProcessor && count >= 2' v-on:count="$emit('count',$event)")
    svgSoul( :setToZero='setToZero' number='2' v-if='isSoul && count >= 2' v-on:count="$emit('count',$event)")
    svgBiomechanism( :setToZero='setToZero' number='3' v-if='isBiomechanism && count >= 3' v-on:count="$emit('count',$event)")
    svgProcessor( :setToZero='setToZero' number='3' v-if='isProcessor && count >= 3' v-on:count="$emit('count',$event)")
    svgSoul( :setToZero='setToZero' number='3' v-if='isSoul && count >= 3' v-on:count="$emit('count',$event)")
    svgBiomechanism( :setToZero='setToZero' number='4' v-if='isBiomechanism && count >= 4' v-on:count="$emit('count',$event)")
    svgProcessor( :setToZero='setToZero' number='4' v-if='isProcessor && count >= 4' v-on:count="$emit('count',$event)")
    svgSoul( :setToZero='setToZero' number='4' v-if='isSoul && count >= 4' v-on:count="$emit('count',$event)")
</template>

<script>
    import { mapState } from 'vuex';
    import ManufactureBiomechanismSVGVue from './ManufactureCheckButton/ManufactureCheckButtonBiomechanism.vue';
    import ManufactureProcessorSVGVue from './ManufactureCheckButton/ManufactureCheckButtonProcessor.vue';
    import ManufactureSoulSVGVue from './ManufactureCheckButton/ManufactureCheckButtonSoul.vue';

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
            countSelect: 0,
            setToZero: false,
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