<template>
    <div class="subject">
        <div class="top-box" fixed>
            <img class="back" src="./../assets/back.png" @click="back">
            <img class="share" src="./../assets/star.png">
        </div>
        <div class="title">{{ subject.title }}</div>
        <div class="author-box">
            <img :src="subject.author.avatar_url">
            <span class="name">{{ subject.author.loginname }}</span>
            <span class="time">时间</span>
        </div>
        <div class="content" v-html="subject.content"></div>
    </div>
</template>

<script>
    import router from './../router/index';
    import { mapState } from 'vuex';
    import * as type from './../store/modules/type';
    export default {
        name: 'Subject',
        computed: mapState({
            subject(state) {
                return state.topics.topics.sub;
            }
        }),
        watch: {
            $route(to) {
                this.fetchMsg(to.params.id);
            }
        },
        created() {
            this.fetchMsg();
        },
        methods: {
            back() {
                router.go(-1);
            },
            fetchMsg() {
                this.$store.dispatch(type.FETCH_TOPICS_SUBJECT, {
                    id: this.$route.params.id
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .subject
        width: 100%
        height: 100%
        text-align: left
        .top-box
            width: 100%
            height: 60px
            // position: fixed
            // margin: -10px 0 0 -10px
            background: #f0f8ff
            .back
                width: 30px
                height: 30px
                margin: 10px 0 0 20px
            .share
                width: 30px
                height: 30px
                margin: 10px 0px 0px 250px
        .title
            padding: 10px
            font-size: 1.36rem
            font-weight: bold
        .author-box
            width: 100%
            height: 50px
            img
                width: 50px
                height: 50px
                border-radius: 100%
            .name
                font-size: 1.2rem
                position: relative
                top: -20px
            .time
                font-size: 1.2rem
                color: #aaaaaa
                position: relative
                left: 40%
                top: -20px
            .content
                padding: 20px
                width: 100%
                height: auto
                @include: center-block
</style>
