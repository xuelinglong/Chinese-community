<template>
    <div class="push">
        <app-header></app-header>
        <div class="push-view" v-if="success === false">
            <prompt-login></prompt-login>
        </div>

        <div class="push-view" v-else-if="success != false">
            <div class="push-radio-box">
                <span class="push-key">选择模块</span>
                <select class="push-value" v-model="tab">
                    <!-- <option disabled value="">请选择</option> -->
                    <option value="ask">问答</option>
                    <option value="share">分享</option>
                    <option value="job">招聘</option>
                </select>
            </div>
            <div class="push-radio-box">
                <span class="push-key">标题</span>
                <input class="push-value" v-model="title" placeholder="10个字符以上">
            </div>
            <div class="push-radio-box">
                <div class="push-edit-button" @click="showMarkdown">点击编辑正文</div>
            </div>
            <div class="push-radio-box">
                <mt-button @click="push" size="small">发布</mt-button>
            </div>
            <markdown-show v-show="markdownShow"></markdown-show>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
import Header from './../../components/header/Header'
import PromptLogin from './../../components/login//PromptLogin'
import Markdown from './markdown'

export default {
  name: 'Push',
  components: {
    'app-header': Header,
    'prompt-login': PromptLogin,
    'markdown-show': Markdown
  },
  data () {
    return {
      tab: 'ask',
      title: []
    }
  },
  methods: {
    openToastWithIcon () {
      Toast({
        message: '发布成功',
        duration: 1000,
        iconClass: 'mintui mintui-success'
      })
    },
    openToast () {
      Toast({
        message: '标题必须为10个字符以上！！！',
        duration: 1000
      })
    },
    showMarkdown () {
      this.$store.dispatch(type.CHANGE_MARKDOWNSHOW_STATE)
    },
    push () {
      if (this.title.length > 10) {
        this.$store.dispatch(type.PUSH_NEW_TOPIC, {
          accesstoken: this.accesstoken,
          title: this.title,
          tab: this.tab,
          content: this.contentData,
          loginname: this.loginname
        })
        this.openToastWithIcon()
        this.title = []
      } else {
        this.openToast()
        console.log(this.title.length)
      }
    }
  },
  computed: mapState({
    success (state) {
      return state.user.success
    },
    accesstoken (state) {
      return state.user.accesstoken
    },
    loginname (state) {
      return state.user.loginname
    },
    markdownShow (state) {
      return state.push.markdownShow
    },
    contentData (state) {
      return state.push.contentData
    }
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.push
  width 100%
  height 100%
  display flex

  .push-view
    flex 1
    width 100%
    position fixed
    top 56px
    left 0
    bottom 56px

    .push-radio-box
      width 100%
      height auto
      text-align left
      box-sizing border-box
      padding 20px 5% 0px 5%
      display flex
      flex-direction column

      .push-key
        flex: 1
        width 90%
        height 20px
        font-size 0.8rem
        color #aaaaaa

      .push-value
        flex 1
        width 90%
        height 30px
        margin-top 10px
        border-radius 2px
        box-sizing border-box
        border 1px solid #aaaaaa

      .push-edit-button
        width 90%
        height 30px
        font-size 0.7rem
        box-sizing border-box
        padding 5px 3px
        margin-top 10px
        border-radius 2px
        background #EFF2F7
        border 1px solid #aaaaaa

input
  padding 1px 2px

.mint-button--small
  width 20%
  background #ffffff
  margin 20px 0 0 40%
  box-sizing border-box
</style>
