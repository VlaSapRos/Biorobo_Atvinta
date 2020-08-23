<template lang="html">
    <div class='silhouette'>
      <img src='assets/img/robots/frontendMaleCannotBeCreated.svg'>
    </div>
</template>

<script>
  export default {
    props: {
      title: '',
      name: '',
      value1: '',
      value2: '',
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
  .silhouette {
    
  }
</style>