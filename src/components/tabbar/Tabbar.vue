<template>
    <div class="tabbar">
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="topics">
                <page-topics></page-topics>
            </mt-tab-container-item>
            <mt-tab-container-item id="msg">
                <page-msg></page-msg>
            </mt-tab-container-item>
            <mt-tab-container-item id="push">
                <page-push></page-push>
            </mt-tab-container-item>
            <mt-tab-container-item id="my">
                <page-user></page-user>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="topics">
                <img slot="icon" src="./../../assets/topic.png">
                话题
            </mt-tab-item>
            <mt-tab-item id="msg">
                <img slot="icon" src="./../../assets/message.png">
                未读消息
            </mt-tab-item>
            <mt-tab-item id="push">
                <img slot="icon" src="./../../assets/push.png">
                发布
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" src="./../../assets/my.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Topics from './../../pages/topics/Topics'
import Msg from './../../pages/message/Message.vue'
import Push from './../../pages/push/Push'
import User from './../../pages/user/User'
let selectedItemName = 'topics'

export default {
  name: 'Tabbar',
  components: {
    'page-topics': Topics,
    'page-msg': Msg,
    'page-push': Push,
    'page-user': User
  },
  data () {
    return {
      selected: selectedItemName
    }
  },
  computed: mapState({
    style (state) {
      return state.topics.selected
    }
  }),
  watch: {
    selected: function (val, oldVal) {
      selectedItemName = val
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tabbar
  width 100%
  height 100%
  display flex

  .mint-tab-container
    flex 1
    width 100%
    height auto
    position fixed
    left 0
    top 0
    bottom 0

    .mint-tab-container-wrap
      width 100%
      height 100%

  .mint-tabbar.is-fixed
    position fixed
    width 100%
    height 56px
    left 0
    bottom 0

    .mint-tab-item
      border-bottom 0px

  .mint-tabbar > .mint-tab-item.is-selected
    background-color #eaeaea
    color #008000
</style>
