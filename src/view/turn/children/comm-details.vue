<template>
    <div class="comm-details">
        <div class="comm-box">
            <div class="edit">
                <textarea class="input" v-model="content"></textarea>
            </div>
            <div class="icon">
                <button class="icon-push" @click="push">发送</button>
                <button class="icon-cancel" @click="back">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    // import router from './../../../router/index';
    import { Toast } from 'mint-ui';
    import { mapState } from 'vuex';
    import * as type from './../../../store/modules/type';
    export default {
        name: 'Comm-details',
        data() {
            return {
                content: []
            };
        },
        props: ['topicid', 'replyid'],
        computed: mapState({
            accesstoken(state) {
                return state.user.accesstoken;
            },
            loginname(state) {
                return state.user.loginname;
            }
        }),
        methods: {
            back() {
                this.$store.dispatch(type.STATE_SHOW_COMMDETAILS);
            },
            push() {
                if (this.content.length === 0) {
                    this.openToast();
                } else {
                    this.$store.dispatch(type.PUSH_REPLIES, {
                        accesstoken: this.accesstoken,
                        topicid: this.topicid,
                        content: this.content,
                        replyid: this.replyid,
                        loginname: this.loginname
                    });
                    this.openToastWithIcon();
                    this.$store.dispatch(type.STATE_SHOW_COMMDETAILS);
                }
            },
            openToast() {
                Toast({
                        message: '评论不能为空！',
                        duration: 1000
                });
            },
            openToastWithIcon() {
                Toast({
                        message: '评论成功',
                        iconClass: 'mintui mintui-success',
                        duration: 1000
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .comm-details
        width: 100%
        height: 100%
        position: absolute
        top: 60px
        margin-top: -60px
        z-index: 10
        background: rgba(0,0,0,0.6)
        .comm-box
            width: 80%
            height: 30%
            position: absolute
            left: 10%
            top: 20%
            background: #ffffff
            .edit
                width: 100%
                height: 70%
                padding: 5% 6%
                box-sizing: border-box
                .input
                    width: 100%
                    height: 100%
                    background: #f0f0f0
                    box-sizing: border-box
            .icon
                width: 100%
                height: 30%
                box-sizing: border-box
                .icon-push
                    width: 30%
                    height: 40px
                    position: absolute
                    left: 20%
                    height: 40px
                    font-size: 1.2rem
                    color: #008000
                .icon-cancel
                    width: 30%
                    height: 40px
                    position: absolute
                    left: 55%
                    height: 40px
                    font-size: 1.2rem
                    color: #000000
</style>
