<template>
    <div class="msg">
        <v-header></v-header>
        <div class="msg-view" v-if="success === false">
            <v-promptLogin></v-promptLogin>
        </div>

        <div class="msg-view" v-else-if="success != false">
            <div class="title">未读消息({{ msg_count }})</div>
            <div class="msg-lists">
                <div class="msg-item-f" v-if="msg_count === 0">没有消息</div>
                <div class="msg-item-t" v-else-if="msg_count != 0">
                    <div class="msg-item" v-for="subject in msgData.hasnot_read_messages" :key="subject.topic.id">
                        <router-link :to="{name: 'Subject', params:{id: subject.topic.id}}">
                        <div class="author">来自 {{ subject.author.loginname }}</div>
                        <div class="time">{{ subject.reply.create_at | filterTime }}</div>
                        <div class="content" v-html="subject.reply.content"></div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="title">已读消息</div>
            <div class="msg-lists">
                <div class="msg-item-f" v-if="HAS_READ_MESSAGE_COUNT === 0">没有消息</div>
                <div class="msg-item-t" v-else-if="HAS_READ_MESSAGE_COUNT != 0">
                    <div class="msg-item" v-for="subject in msgData.has_read_messages" :key="subject.topic.id">
                        <router-link :to="{name: 'Subject', params:{id: subject.topic.id}}">
                        <div class="author">来自 {{ subject.author.loginname }}</div>
                        <div class="time">{{ subject.reply.create_at | filterTime }}</div>
                        <div class="content" v-html="subject.reply.content"></div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PromptLogin from './children/promptLogin'
import { mapState, mapGetters } from 'vuex'
import Header from './../header'
export default {
  name: 'Msg',
  components: {
    'v-promptLogin': PromptLogin,
    'v-header': Header
  },
  computed: {
    ...mapState({
      success (state) {
        return state.user.success
      },
      msg_count (state) {
        return state.message.msg_count
      },
      msgData (state) {
        return state.message.msgData
      }
    }),
    ...mapGetters([
      'HAS_NOT_READ_MESSAGE_COUNT',
      'HAS_READ_MESSAGE_COUNT'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.msg
  width 100%
  min-height 100%
  overflow-y auto
  display flex

  .msg-view
    flex 1
    width 100%
    position fixed
    top 56px
    left 0
    bottom 56px
    overflow-y auto

    .title
      width 100%
      height 30px
      background #EFF2F7
      box-sizing border-box
      text-align left
      font-size 0.9rem
      padding 5px 10px
      border-left 5px solid #D3DcE6

    .msg-lists
      width 100%
      min-height 60px
      overflow-y auto

      .msg-item-f
        width 100%
        min-height 30px
        overflow-x hidden
        overflow-y auto
        text-align center
        box-sizing border-box

      .msg-item-t
        width 100%
        min-height 60px
        overflow-x hidden
        overflow-y auto
        box-sizing border-box

        .msg-item
          width 100%
          min-height 90px
          overflow-y auto
          box-sizing border-box
          padding 20px
          border-bottom 5px solid #f0f0f0

          & > a
            text-decoration none

            .author
              width 70%
              height 30px
              float left
              text-align left
              font-size 1.2rem
              color #aaaaaa

            .time
              width 30%
              height 30px
              float right
              text-align right
              font-size 1.2rem
              color #aaaaaa

            .content
              width 100%
              min-height 60px
              font-size 1rem
              text-align left
              color #aaaaaa
</style>
