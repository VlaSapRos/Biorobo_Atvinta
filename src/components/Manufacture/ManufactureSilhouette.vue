<template lang="html">
    <div class='silhouette'>
      <img :src="'assets/img/robots/' + derictory + '/'+ picture + '.svg'">
    </div>
</template>

<script>
  export default {
    props: {
      stabilizer:'',
      type:'',
      isBeCreate:'',
      robotCreated:'',
    },
    computed: {
      picture: function() {
        switch (this.stabilizer + this.type) {
          case ('MaleFrontEnd'): return 'maleFrontend'; break;
          case ('MaleDesign'): return 'maleDesign'; break;
          case ('FemaleFrontEnd'): return 'famaleFrontend'; break;
          case ('FemaleDesign'): return 'famaleDesign'; break;
          default:break;
          }
      },
      derictory: function() {
        if (this.robotCreated) { return 'created'}
        else if (this.isBeCreate) { return 'canBeCreated'}
        else{ return 'canNotBeCreated' }
      }
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