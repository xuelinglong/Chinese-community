<template>
    <div class="msg">
        <!-- 未登录时的样式 -->
        <div class="msg-view" v-if="login === `0`">
            <v-promptLogin></v-promptLogin>
        </div>

        <!-- 登录后的样式 -->
        <div class="msg-view" v-else-if="login != `0`">
            I am msg!
        </div>
    </div>
</template>

<script>
    import PromptLogin from './promptLogin';
    export default {
        name: 'Msg',
        data() {
            return {
                login: '1'
            };
        },
        components: {
            'v-promptLogin': PromptLogin
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .msg
        width: 100%
        height: 100%
        .msg-view
            width: 100%
            height: auto
</style>
