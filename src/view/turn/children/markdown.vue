<template>
    <div class="markdown">
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="edit">编辑</mt-tab-item>
            <mt-tab-item id="preview">预览</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="edit">
                <div class="edit">
                    <!-- <input type="text" v-model="content" placeholder="正文"> -->
                    <textarea class="input" v-model="content" placeholder="正文"></textarea>
                </div>
                <div class="button-box">
                    <button class="save" @click="save">保存</button>
                    <button class="cancel" @click="back">取消</button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="preview">
                <div class="preview">{{ this.content }}</div>
                <div class="button-box">
                    <button class="save" @click="save">保存</button>
                    <button class="cancel" @click="back">取消</button>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../../store/modules/type'
export default {
  name: 'Markdown',
  data () {
    return {
      selected: 'edit',
      content: []
    }
  },
  computed: mapState({
    contentData (state) {
      return state.push.contentData
    }
  }),
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
  }
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

  // background: #f0f0f0
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

      .edit
        width 100%
        height 400px
        padding 20px
        box-sizing border-box
        background #ECF0F1

        .input
          width 100%
          height 300px
          padding 8px
          box-sizing border-box
          overflow-x hidden
          overflow-y auto
          font-size 1.2rem
          background #ECF0F1

      .preview
        width 100%
        height 400px
        padding 20px
        box-sizing border-box
        background #ECF0F1

      .button-box
        width 50%
        margin 5% 0 0 50%

        .save
          width 45%
          height 40px
          font-size 1rem
          color #008000

        .cancel
          width 45%
          height 40px
          font-size 1rem
</style>
