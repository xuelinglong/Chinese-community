<template>
    <div class="list">
        <div class="list-all">
            <v-card v-for="subject in subjects" :subject="subject" :key="subject.id"></v-card>
        </div>
    </div>
</template>

<script>
    import Card from './../../components/card';

    export default {
        name: 'List',
        components: {
            'v-card': Card
        },
        props: ['tabName', 'subjects']
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .list {
        width: 100%
        height: auto
    }
</style>
