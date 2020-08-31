<template lang="pug">
  div(class='silhouette')
    img(:src="'assets/img/robots/' + derictory + '/'+ picture + '.svg'")
</template>

<script>
import { mapState } from 'vuex';

  export default {
    props: {
      stabilizer:'',
      type:'',
      isBeCreate:'',
    },
    computed: {
      ...mapState([
        'robotIsCreated',
      ]),
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
        if (this.robotIsCreated) { return 'created'}
        else if (this.isBeCreate) { return 'canBeCreated'}
        else { return 'canNotBeCreated' }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>