<template>
    <div class="commentaries">
        <v-commdetails v-show="show"></v-commdetails>
        <div class="top-box" fixed>
            <img class="back" src="./../../../assets/back.png" @click="back">
            <div class="commentaries" @click="changeShow">
                <div class="input">
                    <span class="word">说点什么吧</span>
                </div>
                <img src="./../../../assets/commentaries.png" class="comm-icon">
            </div>
            <img class="share" src="./../../../assets/star.png">
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import * as type from './../../../store/modules/type';
    import router from './../../../router/index';
    import CommDetails from './comm-details';
    export default {
        name: 'Commentaries',
        data() {
            return {
                // show: false
            };
        },
        components: {
            'v-commdetails': CommDetails
        },
        computed: mapState({
            show(state) {
                return state.commentaries.showDetails;
            }
        }),
        methods: {
            back() {
                router.go(-1);
            },
            changeShow() {
                this.$store.dispatch(type.STATE_SHOW_COMMDETAILS);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .commentaries
        width: 100%
        height: 100%
        background: #f0f0f0
        text-align: left
        .top-box
            width: 100%
            height: 60px
            // position: fixed
            // margin: -10px 0 0 -10px
            background: #f0f8ff
            .back
                width: 30px
                height: 30px
                margin: 15px 0 0 20px
                float: left
            .commentaries
                width: 250px
                height: 60px                
                float: left
                display: flex
                flex-direction: row
                background: #f0f8ff
                .input
                    width: 200px
                    height: 30px
                    padding-top: 10px
                    border: 1px solid #aaaaaa
                    margin: 10px 0 10px 20px
                    .word
                        height: 30px
                        color: #aaaaaa
                        margin-top: 7px
                        font-size: 0.9rem
                .comm-icon
                    width: 30px
                    height: 30px
                    margin: 15px 0 0 20px
            .share
                width: 30px
                height: 30px
                margin: 15px 0px 0px 20px
                float: left
</style>
