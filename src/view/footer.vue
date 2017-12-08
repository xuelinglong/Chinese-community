<template>
    <div class="footer">
        <v-turn :footName="selected"></v-turn>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="topic">
                <img slot="icon" src="./../assets/话题.png">
                话题
            </mt-tab-item>
            <mt-tab-item id="msg">
                <img slot="icon" src="./../assets/消息.png">
                未读消息
            </mt-tab-item>
            <mt-tab-item id="push">
                <img slot="icon" src="./../assets/发布.png">
                发布
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" src="./../assets/我的.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import Turn from './turn/turn';

    export default {
        name: 'Footer',
        data() {
            return {
                selected: 'topic'
            };
        },
        components: {
            'v-turn': Turn
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
