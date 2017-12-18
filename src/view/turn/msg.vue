<template>
    <div class="msg">
        <div class="msg-view" v-if="success === false">
            <v-promptLogin></v-promptLogin>
        </div>

        <div class="msg-view" v-else-if="success != false">
            I am msg!
        </div>
    </div>
</template>

<script>
    import PromptLogin from './children/promptLogin';
    import { mapState } from 'vuex';
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
</style>
