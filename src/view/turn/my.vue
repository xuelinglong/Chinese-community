<template>
    <div class="my">
        <!-- 未登录时的样式 -->
        <div class="login-view" v-if="success === false">
            <!-- <v-promptLogin></v-promptLogin> -->
            <div class="accesstoken">
                <img src="./../../assets/锁.png">
                &nbsp
                <input v-model.trim="accesstoken">
            </div>

            <button class="registration">注册</button>
            <button class="login" @click="go">登录</button>
        </div>

        <!-- 登录后的样式 -->
        <div class="my-view" v-if="success != false">
            登录成功
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import * as type from './../../store/modules/type';
    // import PromptLogin from './promptLogin';
    export default {
        name: 'My',
        data() {
            return {
                // login: '0',
                // accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
            };
        },
        // components: {
        //     'v-promptLogin': PromptLogin
        // },
        computed: mapState({
            success(state) {
                return state.user.success;
            },
            accesstoken(state) {
                return state.user.accesstoken;
            }
        }),
        methods: {
            go() {
                this.login();
                // this.success = !this.success;
            },
            login() {
                this.$store.dispatch(type.FETCH_USER, {
                    accesstoken: this.accesstoken
                });
                this.dispatch(type.CHANGE_LOGIN_STATE);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .my
        width: 100%
        height: 100%
        .login-view
            width: 100%
            height: 555px
            background: #f0f0f0
            .accesstoken
                width: 70%
                height: 30px
                display: flex
                flex-direction: row
                position: absolute
                top: 50px
                left: 15%
                img
                    flex: 1
                    width: 30px
                    height: 30px
                input
                    flex: 7
                    width: 70%
                    height: 30px
                    font-size: 1.0rem
                    background: #f0f0f0
                    // border: 1px solid #aaaaaa
            .registration
                width: 80%
                height: 40px
                position: absolute
                left: 10%
                top: 120px 
                font-size: 1.2rem
                background: #ffffff
                border-radius: 3px
                border: 1px solid #fcfcfc
            .login
                width: 80%
                height: 40px
                position: absolute
                left: 10%
                top: 170px
                font-size: 1.2rem
                color: #ffffff
                background: #008000
                border-radius: 3px
                border: 1px solid #008000
</style>
