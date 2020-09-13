<template lang="pug">
  .ManufactureRadio
    span.ManufactureRadio__title {{ title }}
    .container.container_ManufactureRadio
      .ManufactureRadio__container
        .ManufactureRadio__wrapper
          input.ManufactureRadio__input(checked type='radio' :id="name+'_1'" :name='name' v-model='picked' :value='value1' v-on:change="$emit('roboTypeChange',picked)")
          label.ManufactureRadio__label(:for="name+'_1'")
        p.ManufactureRadio__text {{ value1 }}
      .ManufactureRadio__container
        .ManufactureRadio__wrapper
          input.ManufactureRadio__input(type='radio' :id="name+'_2'" :name='name' v-model='picked' :value='value2' v-on:change="$emit('roboTypeChange',picked)")
          label.ManufactureRadio__label(:for="name+'_2'")
        p.ManufactureRadio__text {{ value2 }}
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
  .ManufactureRadio {
    margin-bottom: 23px;
  }
  .ManufactureRadio__title {
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
  .ManufactureRadio__input {
    appearance: none;
    position: absolute;
  }
  .ManufactureRadio__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ManufactureRadio__container {
    display: flex;
    width: 103px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    justify-content: space-between;
  }
  .ManufactureRadio__label {
    height: 24px;
    width: 24px;
    border: 2px solid #A3B8CC;
    border-radius: 50%;
    margin-right: 4px;
  }
  .ManufactureRadio__label::after {
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
  .ManufactureRadio__text {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 63px;
    height: 32px;
  }
  .container_ManufactureRadio {
    width: 237px;
    padding-left: 2px;
  }
  .ManufactureRadio__input:checked + .ManufactureRadio__label::after {
    opacity: 1;
  }
</style>