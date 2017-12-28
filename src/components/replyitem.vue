<template>
    <div class="replyitem">
        <div class="author">
            <div class="img-author">
                <img class="image" :src="subject.author.avatar_url">
            </div>
            <div class="author-msg">
                <span class="name">{{ subject.author.loginname }}</span>
                <span class="time">{{ subject.create_at }}</span>
            </div>
            <div class="icon-zan" @click="ups">
                <img class="zan" src="./../assets/zan.png">
                <span class="number">{{ subject.ups.length }}</span>
            </div>
        </div>
        <div class="content" v-html="subject.content"></div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { mapState } from 'vuex';
    import * as type from './../store/modules/type';
    export default {
        name: 'Replyitem',
        data() {
            return {
                // replyid: ''
            };
        },
        props: ['subject', 'replyid'],
        computed: mapState({
            success(state) {
                return state.user.success;
            },
            accesstoken(state) {
                return state.user.accesstoken;
            },
            topicid(state) {
                return state.topics.topics.sub.id;
            }
        }),
        methods: {
            ups() {
                if (this.success) {
                    this.$store.dispatch(type.UPS_REPLY, {
                        accesstoken: this.accesstoken,
                        replyid: this.replyid,
                        topicid: this.topicid
                    });
                } else {
                    this.openToast();
                }
            },
            openToast() {
                Toast({
                        message: '您还没有登录，不能点赞！',
                        duration: 1000
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .replyitem
        width: 100%
        min-height: 200px
        overflow-y: auto
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
                padding: 3px 0 0 5%
                display: flex
                flex-direction: row
                box-sizing: border-box
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
</style>