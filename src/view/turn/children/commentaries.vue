<template>
    <div class="commentaries">
        <v-commdetails v-show="show" :topicid="this.topicid" :replyid="this.replyid"></v-commdetails>
        <div class="top-box" fixed>
            <img class="back" src="./../../../assets/back.png" @click="back">
            <div class="commentaries" @click="changeShow">
                <div class="input">
                    <span class="word">说点什么吧</span>
                </div>
                <img src="./../../../assets/commentaries.png" class="comm-icon">
            </div>
            <!-- <img class="star" src="./../../../assets/star.png"> -->
        </div>
        <div class="replies-box">
            <div class="replies-item" v-for="subject in replies" :key="subject.id" :replyid="subject.id">
                <div class="author">
                    <div class="img-author">
                        <img class="image" :src="subject.author.avatar_url">
                    </div>
                    <div class="author-msg">
                        <span class="name">{{ subject.author.loginname }}</span>
                        <span class="time">{{ subject.create_at }}</span>
                    </div>
                    <div class="icon-zan">
                        <img class="zan" src="./../../../assets/zan.png">
                        <span class="number">{{ subject.ups.length }}</span>
                    </div>
                </div>
                <div class="content" v-html="subject.content"></div>
            </div>
            <div class="blank-box" v-show="replies.length === 0">没有评论</div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { mapState } from 'vuex';
    import * as type from './../../../store/modules/type';
    import router from './../../../router/index';
    import CommDetails from './comm-details';
    export default {
        name: 'Commentaries',
        data() {
            return {
                replyid: ''
                // show: false
            };
        },
        components: {
            'v-commdetails': CommDetails
        },
        computed: mapState({
            show(state) {
                return state.commentaries.showDetails;
            },
            success(state) {
                return state.user.success;
            },
            topicid(state) {
                return state.topics.topics.sub.id;
            },
            replies(state) {
                return state.topics.topics.sub.replies;
            }
        }),
        methods: {
            back() {
                router.go(-1);
            },
            changeShow() {
                if (this.success) {
                    this.$store.dispatch(type.STATE_SHOW_COMMDETAILS);
                } else {
                    this.openToast();
                }
            },
            openToast() {
                Toast({
                        message: '您还没有登录，不能评论！',
                        duration: 1000
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .commentaries
        width: 100%
        height: 100%
        text-align: left
        .top-box
            width: 100%
            height: 60px
            position: fixed
            box-sizing: border-box
            background: #f0f8ff
            .back
                width: 30px
                height: 30px
                margin: 15px 0 0 20px
                float: left
            .commentaries
                width: 250px
                height: 60px                
                float: left
                display: flex
                flex-direction: row
                background: #f0f8ff
                .input
                    width: 200px
                    height: 30px
                    padding-top: 10px
                    border: 1px solid #aaaaaa
                    margin: 10px 0 10px 20px
                    .word
                        height: 30px
                        color: #aaaaaa
                        margin-top: 7px
                        font-size: 0.9rem
                .comm-icon
                    width: 30px
                    height: 30px
                    margin: 15px 0 0 20px
            // .star
            //     width: 30px
            //     height: 30px
            //     margin: 15px 0px 0px 20px
            //     float: left
        .replies-box
            width: 100%
            min-height: 607px
            overflow-y: auto
            padding-top: 60px
            box-sizing: border-box
            .replies-item
                width: 100%
                min-height: 200px
                overflow-y: auto
                border-bottom: 10px solid #f0f0f0
                .author
                    width: 100%
                    height: 70px
                    display: flex
                    flex-direction: row
                    box-sizing: border-box
                    padding: 10px
                    .img-author
                        flex: 1.5
                        width: 15%
                        height: 50px
                        .image
                            width: 50px
                            height: 50px
                            border-radius: 25px
                    .author-msg
                        flex: 7
                        width: 70%
                        height: 50px
                        display: flex
                        flex-direction: column
                        box-sizing: border-box
                        padding: 2px 7px
                        .name
                            width: 100%
                            height: 25px
                            font-size: 1.2rem
                        .time
                            width: 100%
                            height: 25px
                            font-size: 0.8rem
                            color: #aaaaaa
                    .icon-zan
                        flex: 1.5
                        width: 15%
                        height: 50px
                        padding-left: 5%
                        display: flex
                        flex-direction: row
                        .zan
                            width: 20px
                            height: 20px
                        .number
                            width: 30px
                            height: 20px
                            color: #aaaaaa
                            padding-left: 2px
                .content
                    width: 70%
                    min-height: 100px
                    overflow-y: auto
                    margin-left: 15%
        .blank-box
            width: 100%
            min-height: 607px
            padding-top: 20px
            text-align: center
            background: #f0f0f0
            color: #000000
            box-sizing: border-box
</style>
