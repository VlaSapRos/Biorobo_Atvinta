<template>
    <div class="modalMask">
        <div class="modalConteiner">
            <button v-on:close="$emit('close')">
            <h1 class="modalTitle"></h1>
            <pre class="modalSubtitle"></pre>
        </div>
    </div>      
</template>

<script>
export default {
    props:{
        title:'',
        subtitle:'',
    }
}
</script>

<style lang="scss">
    .modalMask {
        position: fixed;
        z-index: 9998;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background: #1A1A1A;
        opacity: 0.67;
    }
    .modalConteiner {
        position: absolute;
        width: 496px;
        height: 240px;
        left: 472px;
        top: 288px;
        background: #FFFFFF;
        border-radius: 10px;
    }
    .modalTitle {
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
        width: 306px;
        height: 64px;
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #4C5865;
    }
</style>