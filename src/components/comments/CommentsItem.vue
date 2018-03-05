<template>
    <div class="commentsitem">
        <div class="commentsitem-author">
            <div class="commentsitem-img-author">
                <img class="commentsitem-image" :src="subject.author.avatar_url">
            </div>
            <div class="commentsitem-author-msg">
                <span class="commentsitem-name">{{ subject.author.loginname }}</span>
                <span class="commentsitem-time">{{ subject.create_at | filterTime }}</span>
            </div>
            <div class="commentsitem-icon-zan" @click="ups">
                <img class="commentsitem-zan" src="./../../assets/zan.png">
                <span class="commentsitem-number">{{ subject.ups.length }}</span>
            </div>
        </div>
        <div class="commentsitem-content" v-html="subject.content"></div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
export default {
  name: 'CommentsItem',
  props: {
    subject: {
      type: Object
    },
    replyid: {
      type: String
    }
  },
  methods: {
    ups () {
      if (this.success) {
        this.$store.dispatch(type.UPS_REPLY, {
          accesstoken: this.accesstoken,
          replyid: this.replyid,
          topicid: this.topicid
        })
      } else {
        this.openToast()
      }
    },
    openToast () {
      Toast({
        message: '您还没有登录，不能点赞！',
        duration: 1000
      })
    }
  },
  computed: mapState({
    success (state) {
      return state.user.success
    },
    accesstoken (state) {
      return state.user.accesstoken
    },
    topicid (state) {
      return state.topics.topics.topicsubject.sub.id
    }
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.commentsitem
  width 100%
  min-height 200px
  overflow-y auto

  .commentsitem-author
    width 100%
    height 70px
    display flex
    flex-direction row
    box-sizing border-box
    padding 10px

    .commentsitem-img-author
      flex 1.5
      width 15%
      height 50px

      .commentsitem-image
        width 50px
        height 50px
        border-radius 25px

    .commentsitem-author-msg
      flex 7
      width 70%
      height 50px
      display flex
      flex-direction column
      box-sizing border-box
      padding 2px 7px

      .commentsitem-name
        width 100%
        height 25px
        font-size 1.2rem

      .commentsitem-time
        width 100%
        height 25px
        font-size 0.8rem
        color #aaaaaa

    .commentsitem-icon-zan
      flex 1.5
      width 15%
      height 50px
      padding 3px 0 0 5%
      display flex
      flex-direction row
      box-sizing border-box

      .commentsitem-zan
        width 20px
        height 20px

      .commentsitem-number
        width 30px
        height 20px
        color #aaaaaa
        padding-left 2px

  .commentsitem-content
    width 70%
    min-height 100px
    overflow-y auto
    margin-left 15%
</style>