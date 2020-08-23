<template lang="html">
    <div class='myheader'>
        <img class='pac-man' src='assets/img/pac-man.svg'>
        <button class='headerButton'>Произвести биоробота</button>
        <h1 class='headerHeading'>Фабрика по производству биороботов</h1>
        <h3 class='headerSubtitle'>класса «монитор-кресло»</h3>
        <img class='robots' src='assets/img/robots/robotsHeader.svg'>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState ([
            'coinsText'
        ])
    };
</script>

<style lang="scss">
    .myheader{
        position: relative;
        height: 320+144.69px ;
    }
    .pac-man{
        position: absolute;
    }
    .headerHeading {
        position: absolute;
        top: 168px;
        left: 130px;
        font-size: 56px;
        line-height: 72px;
        width: 470px;
        height: 216px;
    }
    .headerSubtitle{
        position: absolute;
        top: 407px;
        left: 130px;
        color: #A3B8CC;
        font-size: 24px;
        line-height: 32px;
        width: 470px;
        height: 216px;
    }
    .robots {
        position: absolute;
        left: 650px;
        top: 144.69px;
    }
    .headerButton {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 236px;
        height: 48px;
        border-radius: 60px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        border:2px solid #FF7F22; 
        background-color: transparent;
    }

</style>