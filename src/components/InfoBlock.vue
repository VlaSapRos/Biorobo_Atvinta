<template lang="pug">
  .block.block_InfoBlock
    span.InfoBlock__title Фабрика по производству биороботов
    span.InfoBlock__subtitle класса «монитор-кресло»
    img.InfoBlock__robots(src='assets/img/robots/robotsHeader.svg')
</template>

<script>
  import { mapState } from 'vuex';
  export default {
  };
</script>

<style lang="scss" scoped>
  .block_InfoBlock{
    position: relative;
    height: 320px;
  }
  .InfoBlock__title {
    position: absolute;
    font-size: 56px;
    line-height: 72px;
    width: 470px;
    height: 216px;
  }
  .InfoBlock__subtitle{
    position: absolute;
    top: 243px;
    color: #A3B8CC;
    font-size: 24px;
    line-height: 32px;
  }
  .InfoBlock__robots {
    position: absolute;
    left: 650px;
  }
</style>