<template>
    <div class="push">
        <div class="push-view" v-if="success === false">
            <v-promptLogin></v-promptLogin>
        </div>

        <div class="push-view" v-else-if="success != false">
            <div class="radio-box">
                <mt-radio
                    align="left"
                    title="选择模块"
                    v-model="value"
                    :options="['问答', '分享', '招聘']">
                </mt-radio>
                <mt-field label="标题" placeholder="请输入标题" :attr="{ minlength: 10 }"></mt-field>
            </div>
        </div>
    </div>
</template>

<script>
    import PromptLogin from './children/promptLogin';
    import { mapState } from 'vuex';
    export default {
        name: 'Push',
        data() {
            return {
                value: ''
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
        // created() {
        //     this.options = ['问答', '分享', '招聘'];
        // }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .push
        width: 100%
        height: 100%
        .msg-view
            width: 100%
            height: auto
            test-align: left
            .radio-box
                width: 100%
                height: 300px
</style>
