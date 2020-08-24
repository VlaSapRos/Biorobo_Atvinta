<template lang="html">
    <div class='silhouette'>
      <img :src="'assets/img/robots/' + derictory + '/'+ picture + '.svg'">
      {{ro}}
    </div>
</template>

<script>
  export default {
    data(){
      return {
        derictory:'canNotBeCreated',
        picture:'maleFrontend',
      }
    },
    props: {
      roboType:{},
    },
    watch:{
      roboType: function (val) {
        cosole.log(1)
        let robotType = this.roboType.stabilizer + this.roboType.type;
        switch (robotType) {
          case (MALE+FRONTEND): this.picture='maleFrontend'; break;
          case (MALE+DESIGN): this.picture='maleDesign'; break;
          case (FAMALE+FRONTEND): this.picture='famaleFrontend'; break;
          case (FAMALE+DESIGN): this.picture='maleDesign'; break;
          default:break;
          }
      }
    }
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