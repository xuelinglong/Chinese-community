<template>
    <div class="footer">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="topic">
                <img slot="icon" src="./../assets/logo.png">
                话题
            </mt-tab-item>
            <mt-tab-item id="未读消息">
                <img slot="icon" src="./../assets/logo.png">
                未读消息
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="./../assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="./../assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                selected: 'topic'
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .footer
        width: 100%

    .mt-tab-item
        border-top: 0.5px solid #000000

    .mint-tabbar > .mint-tab-item.is-selected
        color: #008000
</style>
