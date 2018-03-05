<template>
    <div class="comments">
        <comment-edit v-show="show" :topicid="this.topicid" :replyid="this.replyid"></comment-edit>
        <div class="comments-top-box" fixed>
            <img class="comments-back" src="./../../assets/back.png" @click="back">
            <div class="comments-box" @click="changeShow">
                <div class="comments-input">
                    <span class="comments-word">说点什么吧</span>
                </div>
                <img src="./../../assets/commentaries.png" class="comments-comm-icon">
            </div>
        </div>
        <div class="comments-replies-box">
            <div class="comments-replies-item" v-for="subject in replies" :key="subject.id">
                <comments-item :subject="subject" :replyid="subject.id"></comments-item>
            </div>
            <div class="comments-blank-box" v-show="this.length === 0">没有评论</div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
import router from './../../router/index'
import CommentEdit from './CommentEdit'
import CommentsItem from './CommentsItem'
export default {
  name: 'Comments',
  components: {
    'comment-edit': CommentEdit,
    'comments-item': CommentsItem
  },
  data () {
    return {
      replyid: '',
      length: 0
    }
  },
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
  },
  computed: mapState({
    show (state) {
      return state.comment.showDetails
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
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.comments
  width 100%
  height 100%
  text-align left

  .comments-top-box
    width 100%
    height 60px
    position fixed
    box-sizing border-box
    background #f0f8ff
    z-index 10

    .comments-back
      width 30px
      height 30px
      margin 15px 0 0 20px
      float left

    .comments-box
      width 250px
      height 60px
      float left
      display flex
      flex-direction row
      background #f0f8ff

      .comments-input
        width 200px
        height 30px
        padding-top 10px
        border 1px solid #aaaaaa
        margin 10px 0 10px 20px

        .comments-word
          height 30px
          color #aaaaaa
          margin-top 7px
          font-size 0.9rem

      .comments-comm-icon
        width 30px
        height 30px
        margin 15px 0 0 20px

  .comments-replies-box
    width 100%
    overflow-y auto
    padding-top 60px
    box-sizing border-box

    .comments-replies-item
      width 100%
      min-height 200px
      overflow-y auto
      border-bottom 10px solid #f0f0f0

  .comments-blank-box
    width 100%
    padding-top 20px
    text-align center
    color #000000
    box-sizing border-box
</style>
