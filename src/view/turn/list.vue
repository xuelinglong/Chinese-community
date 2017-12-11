<template>
    <div class="list">
        <div class="list-all">
            <v-card v-for="subject in subjects" :subject="subject" :key="subject.id"></v-card>
        </div>

        <!-- <div class="other-list" v-else-if="tabName !== `all`">
            <v-card v-for="subject in subjects" :subject="subject" :key="subject.id"></v-card>
        </div> -->
        <div class="blank"></div>
    </div>
</template>

<script>
    import Card from './../../components/card';

    export default {
        name: 'List',
        // data() {
        //     return {
        //         subjects: []
        //     };
        // },
        components: {
            'v-card': Card
        },
        props: ['tabName', 'subjects']
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
