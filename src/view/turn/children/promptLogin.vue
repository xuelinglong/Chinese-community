<template>
    <!--  此页面为未读消息、发布、我的未登录账号时显示的页面   -->
    <div class="promptLogin">
        <div class="img">
            <img src="./../../../assets/biker.png">
        </div>
        <div class="message">请登录账号查看！！！</div>
        <div class="button">
            <button class="login">登录</button>
        </div>
    </div>
</template>

<script>
    // import router from './../../router/index';
    export default {
        name: 'PromptLogin',
        methods: {
            // gotoLogin() {
            //     router.push({ name: 'My' });
            // }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .promptLogin
        width: 100%
        height: 555px
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
