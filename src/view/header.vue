<template>
    <div class="header" fixed>
        <img src="./../assets/logo.png">
    </div>

    <!-- <div class="header" fixed>
        <mt-header title="">
            <mt-button icon="" slot="left"></mt-button>
            <mt-button icon="" slot="right"></mt-button>
        </mt-header>
    </div> -->
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        width: 100%
        height: 60px
        background: #008000
        img
            width: 30px
            height: 30px
            padding-top: 15px

    // .mint-header
    //    background-color: #008000
</style>
