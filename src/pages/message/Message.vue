<template>
    <div class="message">
        <app-header></app-header>
        <div class="message-view" v-if="success === false">
            <prompt-login></prompt-login>
        </div>

        <div class="message-view" v-else-if="success != false">
            <div class="message-title">未读消息({{ msg_count }})</div>
            <div class="message-lists">
                <div class="message-item-f" v-if="msg_count === 0">没有消息</div>
                <div class="message-item-t" v-else-if="msg_count != 0">
                    <div class="message-item" v-for="subject in msgData.hasnot_read_messages" :key="subject.topic.id">
                        <router-link :to="{name: 'Subject', params:{id: subject.topic.id}}">
                          <div class="message-author">来自 {{ subject.author.loginname }}</div>
                          <div class="message-time">{{ subject.reply.create_at | filterTime }}</div>
                          <div class="message-content" v-html="subject.reply.content"></div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="message-title">已读消息</div>
            <div class="message-lists">
                <div class="message-item-f" v-if="HAS_READ_MESSAGE_COUNT === 0">没有消息</div>
                <div class="message-item-t" v-else-if="HAS_READ_MESSAGE_COUNT != 0">
                    <div class="message-item" v-for="subject in msgData.has_read_messages" :key="subject.topic.id">
                        <router-link :to="{name: 'Subject', params:{id: subject.topic.id}}">
                          <div class="message-author">来自 {{ subject.author.loginname }}</div>
                          <div class="message-time">{{ subject.reply.create_at | filterTime }}</div>
                          <div class="message-content" v-html="subject.reply.content"></div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from './../../components/header/Header'
import PromptLogin from './../../components/login/PromptLogin'
export default {
  name: 'Message',
  components: {
    'prompt-login': PromptLogin,
    'app-header': Header
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
.message
  width 100%
  min-height 100%
  overflow-y auto
  display flex

  .message-view
    flex 1
    width 100%
    position fixed
    top 56px
    left 0
    bottom 56px
    overflow-y auto

    .message-title
      width 100%
      height 30px
      background #EFF2F7
      box-sizing border-box
      text-align left
      font-size 0.9rem
      padding 5px 10px
      border-left 5px solid #D3DcE6

    .message-lists
      width 100%
      min-height 60px
      overflow-y auto

      .message-item-f
        width 100%
        min-height 30px
        overflow-x hidden
        overflow-y auto
        text-align center
        box-sizing border-box

      .message-item-t
        width 100%
        min-height 60px
        overflow-x hidden
        overflow-y auto
        box-sizing border-box

        .message-item
          width 100%
          min-height 90px
          overflow-y auto
          box-sizing border-box
          padding 20px
          border-bottom 5px solid #f0f0f0

          & > a
            text-decoration none

            .message-author
              width 70%
              height 30px
              float left
              text-align left
              font-size 1.2rem
              color #aaaaaa

            .message-time
              width 30%
              height 30px
              float right
              text-align right
              font-size 1.2rem
              color #aaaaaa

            .message-content
              width 100%
              min-height 60px
              font-size 1rem
              text-align left
              color #aaaaaa
</style>
