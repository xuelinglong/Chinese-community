<template>
    <div class="markdown">
        <mt-navbar class="markdown-page-part" v-model="selected">
            <mt-tab-item id="edit">编辑</mt-tab-item>
            <mt-tab-item id="preview">预览</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="edit">
                <div class="markdown-edit">
                    <textarea class="markdown-input" v-model="content" placeholder="正文"></textarea>
                </div>
                <div class="markdown-button-box">
                    <button class="markdown-save" @click="save">保存</button>
                    <button class="markdown-cancel" @click="back">取消</button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="preview">
                <div class="markdown-preview">{{ this.content }}</div>
                <div class="markdown-button-box">
                    <button class="markdown-save" @click="save">保存</button>
                    <button class="markdown-cancel" @click="back">取消</button>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
export default {
  name: 'Markdown',
  data () {
    return {
      selected: 'edit',
      content: []
    }
  },
  methods: {
    save () {
      if (this.content.length === 0) {
        this.openToast()
      } else {
        this.$store.dispatch(type.SAVE_PUSH_CONTENT, {
          contentData: this.content
        })
        this.$store.dispatch(type.CHANGE_MARKDOWNSHOW_STATE)
      }
    },
    back () {
      this.$store.dispatch(type.CHANGE_MARKDOWNSHOW_STATE)
    },
    openToast () {
      Toast({
        message: '正文不能为空，请输入！',
        duration: 1000
      })
    }
  },
  computed: mapState({
    contentData (state) {
      return state.push.contentData
    }
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.markdown
  width 100%
  height 100%
  position fixed
  left 0
  top 56px
  bottom 56px
  z-index 20

  .mint-navbar
    height 55px

  .mint-tab-container
    position relative
    top 0
    left 0
    height 500px
    background-color #ffffff

    .mint-tab-container-item
      width 100%
      height 100%
      text-align left

      .markdown-edit
        width 100%
        height 400px
        padding 20px
        box-sizing border-box
        background #ECF0F1

        .markdown-input
          width 100%
          height 300px
          padding 8px
          box-sizing border-box
          overflow-x hidden
          overflow-y auto
          font-size 1.2rem
          background #ECF0F1

      .markdown-preview
        width 100%
        height 400px
        padding 20px
        box-sizing border-box
        background #ECF0F1

      .markdown-button-box
        width 50%
        margin 5% 0 0 50%

        .markdown-save
          width 45%
          height 40px
          font-size 1rem
          color #008000

        .markdown-cancel
          width 45%
          height 40px
          font-size 1rem
</style>
