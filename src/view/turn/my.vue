<template>
    <div class="my">
        <div class="login-view" v-if="success === false">
            <div class="accesstoken">
                <img src="./../../assets/锁.png">
                &nbsp
                <input v-model="accesstoken">
            </div>

            <button class="registration">注册</button>
            <button class="login" @click="go">登录</button>
        </div>

        <div class="my-view" v-if="success != false">
            <div class="usr-box">
                <div class="img"><img :src="usr.avatar_url"></div>
                <div class="msg">
                    <div class="loginname">{{ usr.loginname }}</div>
                    <div class="id">ID:{{ USRARR.id }}</div>
                </div>
            </div>
            <div class="msg-box">
                <mt-cell title="我收藏的话题" is-link :to="{name: 'Usertopics', params: {title: '我收藏的话题'}}">
                    <img slot="icon" src="./../../assets/星.png" width="24" height="24">
                    <span style="color: green">0</span>
                </mt-cell>
                <mt-cell title="我参与的话题" is-link :to="{name: 'Usertopics', params: {title: '我参与的话题'}}">
                    <img slot="icon" src="./../../assets/评论.png" width="24" height="24">
                    <span style="color: green">0</span>
                </mt-cell>
                <mt-cell title="我最近的话题" is-link :to="{name: 'Usertopics', params: {title: '我最近的话题'}}">
                    <img slot="icon" src="./../../assets/足迹.png" width="24" height="24">
                    <span style="color: green">0</span>
                </mt-cell>
            </div>
            <div class="logout" @click="logout">退出登录</div>
        </div>

    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { mapState } from 'vuex';
import * as type from './../../store/modules/type';
export default {
    name: 'My',
    data() {
        return {
            // lists: []
        };
    },
    computed: mapState({
        success(state) {
            return state.user.success;
        },
        USRARR(state) {
            return state.user.user.usrArr;
        },
        usr(state) {
            return state.user.user.data;
        },
        accesstoken(state) {
            return state.user.accesstoken;
        }
    }),
    methods: {
        go() {
            this.login();
        },
        login() {
            this.$store.dispatch(type.LOGIN_USER, {
                accesstoken: this.accesstoken
            });
            Indicator.open();
            setTimeout(() => Indicator.close(), 100);
            this.$store.dispatch(type.GET_MESSAGE_COUNT, {
                accesstoken: this.accesstoken
            });
        },
        logout() {
            this.$store.dispatch(type.LOGOUT);
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.my {
    width: 100%;
    height: 100%;

    .login-view {
        width: 100%;
        height: 555px;
        background: #f0f0f0;

        .accesstoken {
            width: 70%;
            height: 30px;
            display: flex;
            flex-direction: row;
            position: absolute;
            top: 50px;
            left: 15%;

            img {
                flex: 1;
                width: 30px;
                height: 30px;
            }

            input {
                flex: 7;
                width: 70%;
                height: 30px;
                font-size: 1rem;
                background: #f0f0f0;
                // border: 1px solid #aaaaaa
            }
        }

        .registration {
            width: 80%;
            height: 40px;
            position: absolute;
            left: 10%;
            top: 120px;
            font-size: 1.2rem;
            background: #ffffff;
            border-radius: 3px;
            border: 1px solid #fcfcfc;
        }

        .login {
            width: 80%;
            height: 40px;
            position: absolute;
            left: 10%;
            top: 170px;
            font-size: 1.2rem;
            color: #ffffff;
            background: #008000;
            border-radius: 3px;
            border: 1px solid #008000;
        }
    }

    .my-view {
        width: 100%;
        height: 555px;
        overflow: hidden;
        overflow-y: hidden;
        background: #f0f0f0;

        .usr-box {
            width: 100%;
            height: 80px;
            padding: 5px 10px;
            box-sizing: border-box;
            border-top: 15px solid #f0f0f0;
            background: #ffffff;

            .img {
                width: 50px;
                height: 50px;
                float: left;
            }

            .msg {
                width: 85%;
                height: 50px;
                float: right;
                text-align: left;

                .loginname {
                    height: 25px;
                    font-size: 1.2rem;
                    padding-left: 10px;
                }

                .id {
                    height: 25px;
                    font-size: 0.9rem;
                    padding-left: 10px;
                }
            }
        }

        .msg-box {
            width: 100%;
            height: auto;
            text-align: left;
            border-top: 15px solid #f0f0f0;
            background: #ffffff;
        }

        .logout {
            width: 100%;
            height: 40px;
            display: block;
            font-size: 1.3rem;
            background: #ffffff;
            margin-top: 20px;
        }
    }
}
</style>
