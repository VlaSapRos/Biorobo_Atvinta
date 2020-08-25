<template lang="html">
    <div class='myheader'>
        <img class='pac-man' src='assets/img/pac-man.svg'>
        <button class='headerButton'>Произвести биоробота</button>
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
        height: 48px ;
    }
    .pac-man{
        position: absolute;
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