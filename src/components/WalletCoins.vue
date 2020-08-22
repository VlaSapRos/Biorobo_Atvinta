<script>
import { mapState } from 'vuex';
import WalletCoinVue from './WalletCoin.vue';
export default {
  data() {
    return {
      coin:1
      }
  },
  props:{
    number:0,
  },
  methods: {
    positionCalculation : function (number) {
      let location = 10 * number;
      return `${location}px`
   }
  },
  render: function (createElement) {
      return createElement('p',
      Array.apply(null, { length: 10 }).map(function (currentValue,index) {
        return createElement('p', number=`${index}`)
      })
      )
  },
  components:{
    'coin': WalletCoinVue,
  },
}
</script>

<style lang="scss" scoped>
  .coin {
    position: absolute;
  }
</style>