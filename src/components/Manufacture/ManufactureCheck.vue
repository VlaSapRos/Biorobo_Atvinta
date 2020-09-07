<template lang="pug">
  div(class='checkboxs')
    svgBiomechanism( number='1' v-if="isBiomechanism && count >= 1" )
    svgProcessor( number='1' v-if='isProcessor && count >= 1' )
    svgSoul( number='1' v-if='isSoul && count >= 1' )
    svgBiomechanism( number='2' v-if='isBiomechanism && count >= 2' )
    svgProcessor( number='2' v-if='isProcessor && count >= 2' )
    svgSoul( number='2' v-if='isSoul && count >= 2' )
    svgBiomechanism( number='3' v-if='isBiomechanism && count >= 3' )
    svgProcessor( number='3' v-if='isProcessor && count >= 3' )
    svgSoul( number='3' v-if='isSoul && count >= 3')
    svgBiomechanism( number='4' v-if='isBiomechanism && count >= 4' )
    svgProcessor( number='4' v-if='isProcessor && count >= 4' )
    svgSoul( number='4' v-if='isSoul && count >= 4' )
</template>

<script>
  import ManufactureBiomechanismSVGVue from './ManufactureCheckButton/ManufactureCheckButtonBiomechanism.vue';
  import ManufactureProcessorSVGVue from './ManufactureCheckButton/ManufactureCheckButtonProcessor.vue';
  import ManufactureSoulSVGVue from './ManufactureCheckButton/ManufactureCheckButtonSoul.vue';
  export default {
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