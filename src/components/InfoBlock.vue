<template lang="html">
    <div class='infoBlock block'>
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
    .infoBlock{
        position: relative;
        height: 320px;
    }
    .pac-man{
        position: absolute;
    }
    .headerHeading {
        position: absolute;
        font-size: 56px;
        line-height: 72px;
        width: 470px;
        height: 216px;
    }
    .headerSubtitle{
        position: absolute;
        top: 243px;
        color: #A3B8CC;
        font-size: 24px;
        line-height: 32px;
    }
    .robots {
        position: absolute;
        left: 650px;
    }


</style>