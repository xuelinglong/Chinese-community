<template>
    <div class="commentaries">
        <v-commdetails v-show="show" :topicid="this.topicid" :replyid="this.replyid"></v-commdetails>
        <div class="top-box" fixed>
            <img class="back" src="./../../../assets/back.png" @click="back">
            <div class="commentaries-box" @click="changeShow">
                <div class="input">
                    <span class="word">说点什么吧</span>
                </div>
                <img src="./../../../assets/commentaries.png" class="comm-icon">
            </div>
        </div>
        <div class="replies-box">
            <div class="replies-item" v-for="subject in replies" :key="subject.id">
                <v-replyitem :subject="subject" :replyid="subject.id"></v-replyitem>
            </div>
            <div class="blank-box" v-show="this.length === 0">没有评论</div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../../store/modules/type'
import router from './../../../router/index'
import CommDetails from './comm-details'
import Replyitem from './../../../components/replyitem'
export default {
  name: 'Commentaries',
  data () {
    return {
      replyid: '',
      length: 0
    }
  },
  components: {
    'v-commdetails': CommDetails,
    'v-replyitem': Replyitem
  },
  computed: mapState({
    show (state) {
      return state.commentaries.showDetails
    },
    success (state) {
      return state.user.success
    },
    accesstoken (state) {
      return state.user.accesstoken
    },
    topicid (state) {
      return state.topics.topics.topicsubject.sub.id
    },
    replies (state) {
      return state.topics.topics.topicsubject.sub.replies
    }
  }),
  created () {
    if (this.replies) {
      this.length = this.replies.length
    } else {
      this.length = 0
    }
  },
  methods: {
    back () {
      router.go(-1)
    },
    gotoLogin () {
      MessageBox.confirm('请登录以继续操作，是否登录？').then(action => {
        router.push({name: 'Login'})
      })
    },
    changeShow () {
      if (this.success) {
        this.$store.dispatch(type.STATE_SHOW_COMMDETAILS)
      } else {
        this.gotoLogin()
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.commentaries
  width 100%
  height 100%
  text-align left

  .top-box
    width 100%
    height 60px
    position fixed
    box-sizing border-box
    background #f0f8ff
    z-index 10

    .back
      width 30px
      height 30px
      margin 15px 0 0 20px
      float left

    .commentaries-box
      width 250px
      height 60px
      float left
      display flex
      flex-direction row
      background #f0f8ff

      .input
        width 200px
        height 30px
        padding-top 10px
        border 1px solid #aaaaaa
        margin 10px 0 10px 20px

        .word
          height 30px
          color #aaaaaa
          margin-top 7px
          font-size 0.9rem

      .comm-icon
        width 30px
        height 30px
        margin 15px 0 0 20px

  .replies-box
    width 100%
    overflow-y auto
    padding-top 60px
    box-sizing border-box

    .replies-item
      width 100%
      min-height 200px
      overflow-y auto
      border-bottom 10px solid #f0f0f0

  .blank-box
    width 100%
    padding-top 20px
    text-align center
    color #000000
    box-sizing border-box
</style>
