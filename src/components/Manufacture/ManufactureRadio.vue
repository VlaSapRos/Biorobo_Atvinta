<template lang="html">
    <div class='radio'>
        <h1>{{ title }}</h1>
        <div class='conteiner radioConteinerSize'>
            <div class='radioConteiner '>
                <div class='radioWrapper'>
                    <input checked 
                        class='radioInput'
                        type='radio' 
                        :id="name+'_1'" 
                        :name='name'
                        v-model='picked'
                        :value='value1'
                        v-on:change="$emit('roboTypeChange',picked)"
                    > 
                    <label class='radioLabel' :for="name+'_1'" />
                </div>
                <p class=radioText>{{ value1 }}</p>
            </div>
            <div class='radioConteiner '> 
                <div class='radioWrapper'>
                    <input class='radioInput' 
                        type='radio' 
                        :id="name+'_2'" 
                        :name='name'
                        v-model='picked'
                        :value='value2'
                        v-on:change="$emit('roboTypeChange',picked)"
                    > 
                    <label class='radioLabel' :for="name+'_2'"/>
                </div>
                <p class=radioText>{{ value2 }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                picked: this.value1
            }
        },
        props: {
            title: '',
            name: '',
            value1: '',
            value2: '',
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: 'Montserrat_regular';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
    }
    .radioInput {
        appearance: none;
        position: absolute;
    }
    .radioWrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .radioConteiner {
        display: flex;
        width: 32+8+63px;
        padding: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        align-items: center;
        justify-content: space-between;
    }
    .radioLabel {
        height: 24px;
        width: 24px;
        border: 2px solid #A3B8CC;
        border-radius: 50%;
    }
    .radioLabel::after {
        content: '';
        height: 16px;
        width: 16px;
        background-color: #FF7F22;
        border-radius: 50%;
        z-index: 1;
        position: absolute;
        top: 4px;
        left: 4px;
        opacity: 0;
    }    
    .radioText {
        display: flex;
        align-items: center;
        width: 63px;
        height: 32px;
    }
    .radioConteinerSize {
        width: 237px;
    }
    .radioInput:checked + .radioLabel::after {
        opacity: 1;
    }

</style>