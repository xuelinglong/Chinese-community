<template>
    <div class="msg">
        <div class="msg-view" v-if="success === false">
            <v-promptLogin></v-promptLogin>
        </div>

        <div class="msg-view" v-else-if="success != false">
            <div class="title">未读消息({{ msg_count }})</div>
            <div class="msg-lists">没有消息</div>
            <div class="title">已读消息</div>
        </div>
    </div>
</template>

<script>
    import PromptLogin from './children/promptLogin';
    import { mapState } from 'vuex';
    import * as type from './../../store/modules/type';
    export default {
        name: 'Msg',
        data() {
            return {
                // login: '0'
            };
        },
        components: {
            'v-promptLogin': PromptLogin
        },
        computed: mapState({
            success(state) {
                return state.user.success;
            },
            msg_count(state) {
                return state.message.msg_count;
            }
        })
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .msg
        width: 100%
        height: 100%
        .msg-view
            width: 100%
            height: auto
            .title
                width: 100%
                height: 30px
                background: #EFF2F7
                box-sizing: border-box
                text-align: left
                font-size: 0.9rem
                padding: 5px 10px
                border-left: 5px solid #D3DcE6
            .msg-lists
                width: 100%
                min-height: 60px
                box-sizing: border-box
                padding-top: 20px
</style>
