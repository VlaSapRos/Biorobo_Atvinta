<template>
    <div>
        <h1> Example, {{message}} </h1>
    </div>
</template>

<script>
    export default {
        data() { // типо стор?
            return {
                message: null,
            }
        },
        created() { // типо изменяет стор?
            this.message = this.$store.getters.getMessage
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        background-color: burlywood;
        color: blue
    }
</style>