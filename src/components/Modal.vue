<template lang="pug">
  .modal__mask
    .modal__container
      img.pic(:src='modal.pic')
      button.modal__close-button(v-on:click="$emit('close')")
        img(src='assets/img/cross.svg')
      span.modal__title {{modal.title}}
      span.modal__subtitle {{modal.subtitleOne}}
      span.modal__subtitle.modal__subtitle_two {{modal.subtitleTwo}}
</template>

<script>
export default {
    props:{
        modal:'',
    }
}
</script>

<style lang="scss" scoped>
  .modal__mask {
    position: absolute;
    z-index: 9998;
    width: 1440px;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    background: rgba(26, 26, 26, 0.67);
  }
  .modal__container {
    position: fixed;
    width: 496px;
    height: 240px;
    left: calc(50% - 248px);
    top: calc(50% - 120px);
    background: #FFFFFF;
    border-radius: 10px;
  }
  .modal__title {
    position: absolute;
    top: 33px;
    left: 106px;
    width: 320px;
    height: 80px;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;  
    line-height: 40px;
    color: #212529;
  }
  .modal__subtitle {
    position: absolute;
    left: 106px;
    top: 33+80+23px;
    width: 306px;
    height: 32px;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #4C5865;
  }
  .modal__subtitle_two {
    top: 168px;
  }
  .modal__close-button {
    position: absolute;
    top: 8px;
    left: 456px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    width: 32px;
    height: 32px;
    border:none;
  }
  .pic {
    position: absolute;
    top: 48px;
    right: 419px;
  }
</style>