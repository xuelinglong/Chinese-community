<template>
    <div class="list">
        <v-card v-for="subject in subjects"></v-card>
        <div class="blank"></div>
    </div>
</template>

<script>
    import Card from './../components/card';

    export default {
        name: 'List',
        data() {
            return {
                subjects: [1, 2, 3, 4, 5]
            };
        },
        components: {
            'v-card': Card
        },
        props: ['tabName']
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .list
        width: 100%
        height: auto
        .blank
            width: 100%
            height: 100px
</style>
