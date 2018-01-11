<template>
    <div class="tabbar">
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="topics">
                <v-topics></v-topics>
            </mt-tab-container-item>
            <mt-tab-container-item id="msg">
                <v-msg></v-msg>
            </mt-tab-container-item>
            <mt-tab-container-item id="push">
                <v-push></v-push>
            </mt-tab-container-item>
            <mt-tab-container-item id="my">
                <v-my></v-my>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="topics">
                <img slot="icon" src="./../assets/话题.png">
                话题
            </mt-tab-item>
            <mt-tab-item id="msg">
                <img slot="icon" src="./../assets/消息.png">
                未读消息
            </mt-tab-item>
            <mt-tab-item id="push">
                <img slot="icon" src="./../assets/发布.png">
                发布
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" src="./../assets/我的.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Topics from './turn/topics'
import Msg from './turn/msg'
import Push from './turn/push'
import My from './turn/my'
let selectedItemName = 'topics'

export default {
  name: 'tabbar',
  data () {
    return {
      selected: selectedItemName
    }
  },
  watch: {
    selected: function (val, oldVal) {
      selectedItemName = val
    }
  },
  computed: mapState({
    style (state) {
      return state.topics.selected
    }
  }),
  components: {
    'v-topics': Topics,
    'v-msg': Msg,
    'v-push': Push,
    'v-my': My
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
  color #008000
</style>
