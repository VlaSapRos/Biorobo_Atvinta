<template lang='html'>
    <div class='mainConteiner'>
        <Modal v-if='showModal' :modal='modalProps' v-on:close='showModal=false; robotIsCreated=false'/>
        <MyHeader/>
        <InfoBlock/>
        <Wallet v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')"/>
        <Market/>
        <Stock v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')"/>
        <Manufacture :robotIsCreated='robotIsCreated' v-on:robotCreated="modalTrue('Биоробот произведён', 'Поздравляем!', 'Вы произвели биоробота', '')"/>
    </div>
</template>

<script>
import MyHeaderVue from './MyHeader.vue';
import WalletVue from './Wallet/Wallet.vue';
import MarketVue from './Market/Market.vue';
import StockVue from './Stock/Stock.vue';
import ManufactureVue from './Manufacture/Manufacture.vue';
import ModalVue from './Modal.vue';
import InfoBlockVue from './InfoBlock.vue';

export default {
    data() {
        return {
            showModal:false,
            modalProps:{
                title:'',
                subtitleOne:'',
                subtitleTwo: '',
                pic:'',
            },
            robotIsCreated: false,
        }
    },
    methods:{
        modalTrue:function(title,subtitleOne,subtitleTwo,pic){
            this.modalProps.title = title;
            this.modalProps.subtitleOne = subtitleOne;
            this.modalProps.subtitleTwo = subtitleTwo;
            this.modalProps.pic = pic;
            this.showModal = true;
        }
    },
    components: {
        'MyHeader': MyHeaderVue,
        'Wallet': WalletVue,
        'Market': MarketVue,
        'Stock': StockVue,
        'Manufacture': ManufactureVue,
        'Modal': ModalVue,
        'InfoBlock': InfoBlockVue,
    },
}
</script>

<style lang="scss" scoped>
    .mainConteiner {
        width: 1016px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 2204px;
    }
</style>