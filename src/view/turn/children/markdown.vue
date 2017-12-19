<template>
    <div class="markdown">
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="edit">编辑</mt-tab-item>
            <mt-tab-item id="preview">预览</mt-tab-item>
        </mt-navbar>
        <!-- <mt-tab-container v-model="selected">
            <mt-tab-container-item id="edit">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="preview">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container> -->
    </div>
</template>

<script>
    export default {
        name: 'Markdown',
        data() {
            return {
                selected: 'edit'
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .markdown
        width: 100%
        height: 100%

</style>
