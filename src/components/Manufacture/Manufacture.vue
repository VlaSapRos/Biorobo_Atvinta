<template lang="pug">
  .block(id='manufacture')
    span.rubric.rubric_Manufacture Производство
    .container.container_Manufacture
      .container_column.container_column_Manufacture
        ManufactureRadio(title='Тип биоробота:' name='type' value1 = 'FrontEnd' value2 = 'Design' v-on:roboTypeChange='roboType.type=$event')
        ManufactureRadio(title='Стабилизатор:' name='gender' value1 = 'Male' value2 = 'Female' v-on:roboTypeChange='roboType.stabilizer=$event')
        button.button-create(:class="{active: isBeCreate}" :disabled='!isBeCreate' @click="createRobot()") Произвести за 10 монет
      .container_column.container_column_Manufacture(style='padding-top:9px')
        ManufactureCheck( count='4' isBiomechanism='true' :stock="stockroom.biomechanisms" )
        ManufactureCheck( count='4' isProcessor='true' :stock="stockroom.processors" )
        ManufactureCheck( count='1' isSoul='true' :stock="stockroom.souls" )
        .Manufacture__not-enough {{ notEnough }}
      .container_column.container_column_Manufacture
        ManufactureSilhouette(:stabilizer='roboType.stabilizer' :type='roboType.type' :isBeCreate='isBeCreate')
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
        roboType:{
          stabilizer: 'Male',
          type: 'FrontEnd',
        },
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
      },
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
        'flags',
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
      countBiomechanisms() {
        let count=0
        this.flags.biomechanism.map((item) => {
          (item) ? count++ : count+=0
        })
        return count
      },
      countProcessors() {
        let count=0
        this.flags.processor.map((item) => {
          (item) ? count++ : count+=0
        })
        return count
      },
      countSouls() {
        let count=0
        this.flags.soul.map((item) => {
          (item) ? count++ : count+=0
        })
        return count
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
  .container_Manufacture {
    height: 320px;
  }
  .container_column_Manufacture {
    justify-content: start;
    align-items: start;
    height: 327px;
    width: 236px;
  }
  .Manufacture__not-enough {
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