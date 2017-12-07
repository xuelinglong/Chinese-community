<template>
    <div class="tab">
        <mt-navbar v-model="selected">
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="essence">精华</mt-tab-item>
            <mt-tab-item id="weex">weex</mt-tab-item>
            <mt-tab-item id="share">分享</mt-tab-item>
            <mt-tab-item id="answer">问答</mt-tab-item>
            <mt-tab-item id="recruit">招聘</mt-tab-item>
        </mt-navbar>
        <v-list :tabName="selected"></v-list>
    </div>
</template>

<script>
    import List from './list';

    export default {
        name: 'Tab',
        data() {
            return {
                selected: 'all'
            };
        },
        components: {
            'v-list': List
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
        width: 100%
        height: 50px
        background: pink

    .mint-tab-item
        border-bottom: 5px solid #f0f8ff

    .mint-tab-item-label
        font-size: 16px

    .mint-navbar .mint-tab-item.is-selected
        border-bottom: 4px solid green
        color: green
        margin-bottom: 1px
</style>
