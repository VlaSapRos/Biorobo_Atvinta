<template lang='html'>
    <div class='mainConteiner'>
        <Modal v-if='showModal' :modal='modalProps' v-on:close='showModal=false'/>
        <MyHeader/>
        <Wallet v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')"/>
        <Market/>
        <Stock v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')"/>/>
        <Manufacture v-on:robotCreated="modalTrue('Биоробот произведён', 'Поздравляем!', 'Вы произвели биоробота', '')"/>/>
    </div>
</template>

<script>
import ExampleVue from './Example.vue';
import MyHeaderVue from './MyHeader.vue';
import WalletVue from './Wallet.vue';
import MarketVue from './Market/Market.vue';
import StockVue from './Stock/Stock.vue';
import ManufactureVue from './Manufacture/Manufacture.vue';
import ModalVue from './Modal.vue';

export default {
    data() {
        return {
            showModal:false,
            modalProps:{
                title:'',
                subtitleOne:'',
                subtitleTwo: '',
                pic:'',
            }
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
        'Example': ExampleVue,
        'MyHeader': MyHeaderVue,
        'Wallet': WalletVue,
        'Market': MarketVue,
        'Stock': StockVue,
        'Manufacture': ManufactureVue,
        'Modal': ModalVue,
    },
}
</script>

<style lang="scss" scoped>
    .mainConteiner {
        width: 1016px;
        display: flex;
        flex-direction: column;
    }

    h1 {
        background-color: burlywood;
        color: blue
    }

    h2 {
        background-color: burlywood;
        color: blue
    }

</style>