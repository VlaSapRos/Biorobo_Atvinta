<template>
    <div class="modalMask">
        <div class="modalConteiner">
            <img class='pic' :src='modal.pic'/>
            <button class='modalClose' v-on:click="$emit('close')"><img src='/assets/img/cross.svg'></button>
            <h1 class="modalTitle">{{modal.title}}</h1>
            <h2 class="modalSubtitle">{{modal.subtitleOne}}</h2>
            <h2 class="modalSubtitle modalSubtitleTwo">{{modal.subtitleTwo}}</h2>
        </div>
    </div>      
</template>

<script>
export default {
    props:{
        modal:'',
    }
}
</script>

<style lang="scss">
    .modalMask {
        position: absolute;
        z-index: 9998;
        width: 1440px;
        height: 100em;
        top: 0px;
        left: 0px;
        margin: 0px;
        background: rgba(26, 26, 26, 0.67);
    }
    .modalConteiner {
        position: fixed;
        width: 496px;
        height: 240px;
        left: 472px;
        top: 288px;
        background: #FFFFFF;
        border-radius: 10px;
    }
    .modalTitle {
        position: absolute;
        top: 33px;
        left: 106px;
        width: 320px;
        height: 80px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;  
        line-height: 40px;
        color: #212529;
    }
    .modalSubtitle {
        position: absolute;
        left: 106px;
        top: 33+80+23px;
        width: 306px;
        height: 32px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #4C5865;
    }
    .modalSubtitleTwo {
        top: 33+80+23+32px;
    }
    .modalClose {
        position: absolute;
        top: 8px;
        left: 456px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        width: 32px;
        height: 32px;
        border:none;
    }
    .pic {
        position: absolute;
        top: 48px;
        right: 419px;
    }
</style>