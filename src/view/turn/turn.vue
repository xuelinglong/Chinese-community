<template>
    <div class="turn">
        <!-- 当前选中‘话题’，取样式1  -->
        <div v-if="footName === `topic`" class="topic-show">
            <v-tab></v-tab>
        </div>

        <!-- 当前选中‘未读消息，发布，我的’，取样式2  -->
        <div v-if="footName != `topic`">
            <!-- 各有两种情况：1.登录后显示该显示的内容；  2.未登录时提示用户去登陆  -->

            <!-- 未登录时的样式 -->
            <div v-if="login === `0`">
                <v-promptLogin></v-promptLogin>
            </div>

            <!-- 登录后显示的样式 -->
            <div v-if="login != `0`">
                <div v-if="footName === `msg`">
                    <v-msg></v-msg>
                </div>

                <div v-if="footName === `push`">
                    <v-push></v-push>
                </div>

                <div v-if="footName === `my`">
                    <v-my></v-my>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tab from './../tab';
    import PromptLogin from './promptLogin';
    import Msg from './msg';
    import Push from './push';
    import My from './my';

    export default {
        name: 'Turn',
        data() {
            return {
                login: '0'
            };
        },
        props: ['footName'],
        components: {
            'v-tab': Tab,
            'v-promptLogin': PromptLogin,
            'v-msg': Msg,
            'v-push': Push,
            'v-my': My
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .turn
        width: 100%
        height: auto
</style>
