<template>
    <div class="topic">
        <v-tab></v-tab>
    </div>
</template>

<script>
    import Tab from './tab';

    export default {
        name: 'Topic',
        components: {
            'v-tab': Tab
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .topic
        width: 100%
        height: auto
</style>
