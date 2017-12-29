<template>
    <!--  此页面为未读消息、发布、我的未登录账号时显示的页面   -->
    <div class="promptLogin">
        <div class="img">
            <img src="./../../../assets/biker.png">
        </div>
        <div class="message">请登录账号查看！！！</div>
        <div class="button">
            <button class="login" @click="openToast">登录</button>
        </div>
    </div>
</template>

<script>
    // import * as type from './../../../store/modules/type';
    // import { mapState } from 'vuex';
    import { Toast } from 'mint-ui';
    export default {
        name: 'PromptLogin',
        methods: {
            // change() {
            //     this.$store.commit(type.CHANGE_TABBAR_STATE, {
            //         type: 'my'
            //     });
            // },
            openToast() {
                Toast({
                        message: '请先登录！！！',
                        duration: 1000
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .promptLogin
        width: 100%
        height: 555px
        text-align: center
        .img
            width: 100px
            height: 100px
            position: absolute
            left: 40%
            top: 20%
            bottom: 0
            img
                width: 100px
                height: 100px
        .message
            width: 200px
            height: 50px
            position: absolute
            left: 30%
            top: 40%
        .button
            width: 140px
            height: 30px
            position: absolute
            top: 45%
            left: 35%
            bottom: 0
            background: #008000
            .login
                font-size: 1.2rem
                color: #ffffff
</style>
