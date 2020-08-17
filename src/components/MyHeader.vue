<template lang="html">
    <div>
        <h1> GGGGGG </h1>
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
 h1{color:red}
 h2{color:blue}
 h3{color:green}
 h4{color:orange}
</style>