<template lang="html">
    <div> {{ coinsText }} 1 </div>
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

</style>