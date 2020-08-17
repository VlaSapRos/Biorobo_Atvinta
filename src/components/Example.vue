<template lang="html">
    <div>
        <div> {{ coinsDeclination }} 1 </div>
        <div> {{ amountCoins }} 2 </div>
        <div> {{ stockroom }} 3 </div>
        <div> {{ errorText }} 4 </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState ([
            'amountCoins',
            'stockroom',
            'errorText',
        ]),
        coinsDeclination() {
            let coinsText = '';
            let amount = this.amountCoins;
            if (amount != 11 && amount != 12 && amount != 13 && amount != 14) {
                switch (amount % 10) {
                    case 1 : coinsText = 'монета'; break; 
                    case 2 :
                    case 3 :
                    case 4 : coinsText = 'монеты'; break;
                    default : coinsText = 'монет';
                }
            } else { coinsText = 'монет'; }
            return coinsText;
        },
    }
};
</script>
<style lang="scss">
    div {
        color: white;
        margin: 10px;
    }
</style>