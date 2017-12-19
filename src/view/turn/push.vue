<template>
    <div class="push">
        <div class="push-view" v-if="success === false">
            <v-promptLogin></v-promptLogin>
        </div>

        <div class="push-view" v-else-if="success != false">
            <div class="radio-box">
                <span class="key">选择模块</span>
                <select class="value" v-model="selected">
                    <option disabled value="">请选择</option>
                    <option>问答</option>
                    <option>分享</option>
                    <option>招聘</option>
                </select>
            </div>
            <div class="radio-box">
                <span class="key">标题</span>
                <input class="value" v-model="message" placeholder="10个字符以上">
            </div>
            <div class="radio-box">
                <div class="edit-button">点击编辑正文</div>
            </div>
            <div class="radio-box">
                <mt-button @click.native="openToastWithIcon" size="large">发布</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { mapState } from 'vuex';
    import PromptLogin from './children/promptLogin';
    import Markdown from './children/markdown';
    
    export default {
        name: 'Push',
        data() {
            return {
                // value: ''
                selected: '',
                message: ''
            };
        },
        components: {
            'v-promptLogin': PromptLogin,
            'v-markdown': Markdown
        },
        computed: mapState({
            success(state) {
                return state.user.success;
            }
        }),
        // created() {
        //     this.options = ['问答', '分享', '招聘'];
        // }
        methods: {
            openToastWithIcon() {
                Toast({
                    message: '操作成功',
                    iconClass: 'mintui mintui-success'
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .push
        width: 100%
        height: 100%
        .push-view
            width: 100%
            height: auto
            .radio-box
                width: 100%
                height: auto
                text-align: left
                box-sizing: border-box
                padding: 20px 5% 0px 5%
                .key
                    width: 90%
                    height: 20px
                    font-size: 0.8rem
                    color: #aaaaaa
                .value
                    width: 90%
                    height: 30px
                    margin-top: 10px
                    border-radius: 2px
                    border: 1px solid #aaaaaa
                .edit-button
                    width: 90%
                    height: 30px
                    font-size: 0.7rem
                    box-sizing: border-box
                    padding: 5px 3px
                    margin-top: 10px
                    border-radius: 2px
                    background: #EFF2F7
                    border: 1px solid #aaaaaa
                .posted
                    width: 20%
                    height: 30px
                    margin: 20px 0 0 40%
                    text-align: center
                    // border: 1px solid #000000

    input
        padding: 1px 2px

    .mint-button--large
        width: 20%
        background: #ffffff
        margin: 20px 0 0 40%
        box-sizing: border-box
</style>
