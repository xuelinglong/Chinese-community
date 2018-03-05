<template>
    <div class="commentedit">
        <div class="commentedit-box">
            <div class="commentedit-edit">
                <textarea class="commentedit-input" v-model="content"></textarea>
            </div>
            <div class="commentedit-icon">
                <button class="commentedit-icon-push" @click="push">发送</button>
                <button class="commentedit-icon-cancel" @click="back">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
export default {
  name: 'CommentEdit',
  props: {
    topicid: {
      type: String
    },
    replyid: {
      type: String
    }
  },
  data () {
    return {
      content: []
    }
  },
  methods: {
    back () {
      this.$store.dispatch(type.STATE_SHOW_COMMDETAILS)
    },
    push () {
      if (this.content.length === 0) {
        this.openToast()
      } else {
        this.$store.dispatch(type.PUSH_REPLIES, {
          accesstoken: this.accesstoken,
          topicid: this.topicid,
          content: this.content,
          replyid: this.replyid,
          loginname: this.loginname
        })
        this.openToastWithIcon()
        this.$store.dispatch(type.STATE_SHOW_COMMDETAILS)
      }
    },
    openToast () {
      Toast({
        message: '评论不能为空！',
        duration: 1000
      })
    },
    openToastWithIcon () {
      Toast({
        message: '评论成功',
        iconClass: 'mintui mintui-success',
        duration: 1000
      })
    }
  },
  computed: mapState({
    accesstoken (state) {
      return state.user.accesstoken
    },
    loginname (state) {
      return state.user.loginname
    }
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.commentedit
  width 100%
  height 100%
  position absolute
  top 60px
  margin-top -60px
  z-index 10
  background rgba(0, 0, 0, 0.6)

  .commentedit-box
    width 80%
    height 30%
    position absolute
    left 10%
    top 20%
    background #ffffff

    .commentedit-edit
      width 100%
      height 70%
      padding 5% 6%
      box-sizing border-box

      .commentedit-input
        width 100%
        height 100%
        background #f0f0f0
        box-sizing border-box

    .commentedit-icon
      width 100%
      height 30%
      box-sizing border-box

      .commentedit-icon-push
        width 30%
        height 40px
        position absolute
        left 20%
        height 40px
        font-size 1.2rem
        color #008000

      .commentedit-icon-cancel
        width 30%
        height 40px
        position absolute
        left 55%
        height 40px
        font-size 1.2rem
        color #000000
</style>
