<template lang="pug">
  div(class='radio')
    h1(class='radioTitle') {{ title }}
    div(class='conteiner radioSize')
      div(class='radioConteiner')
        div(class='radioWrapper')
          input(checked class='radioInput' type='radio' :id="name+'_1'" :name='name' v-model='picked' :value='value1' v-on:change="$emit('roboTypeChange',picked)")
          label(class='radioLabel' :for="name+'_1'")
        p(class='radioText') {{ value1 }}
      div(class='radioConteiner')
        div(class='radioWrapper')
          input(class='radioInput' type='radio' :id="name+'_2'" :name='name' v-model='picked' :value='value2' v-on:change="$emit('roboTypeChange',picked)")
          label(class='radioLabel' :for="name+'_2'")
        p(class='radioText') {{ value2 }}
</template>

<script>
  export default {
    data() {
      return {
        picked: this.value1
      }
    },
    props: {
      title: '',
      name: '',
      value1: '',
      value2: '',
    },
  }
</script>

<style lang="scss" scoped>
    .radio {
        margin-bottom: 23px;
    }
    .radioTitle {
        width: 134px;
        height: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        margin-bottom: 16px;
        margin-top: 5px;
    }
    .radioInput {
        appearance: none;
        position: absolute;
    }
    .radioWrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .radioConteiner {
        display: flex;
        width: 103px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        align-items: center;
        justify-content: space-between;
    }
    .radioLabel {
        height: 24px;
        width: 24px;
        border: 2px solid #A3B8CC;
        border-radius: 50%;
        margin-right: 4px;
    }
    .radioLabel::after {
        content: '';
        height: 16px;
        width: 16px;
        background-color: #FF7F22;
        border-radius: 50%;
        z-index: 1;
        position: absolute;
        top: 4px;
        left: 4px;
        opacity: 0;
    }    
    .radioText {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 63px;
        height: 32px;
    }
    .radioSize {
        width: 237px;
        padding-left: 2px;
    }
    .radioInput:checked + .radioLabel::after {
        opacity: 1;
    }

</style>