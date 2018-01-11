<template>
    <div class="topics">
        <v-header></v-header>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="good">精华</mt-tab-item>
            <mt-tab-item id="weex">weex</mt-tab-item>
            <mt-tab-item id="share">分享</mt-tab-item>
            <mt-tab-item id="ask">问答</mt-tab-item>
            <mt-tab-item id="job">招聘</mt-tab-item>
        </mt-navbar>

        <!-- <mt-tab-container v-model="selected">

            <mt-tab-container-item id="all">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="good">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="weex">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="share">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="ask">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="job">
                <v-list :tabName="selected"></v-list>
            </mt-tab-container-item>

        </mt-tab-container> -->

        <v-list :tabName="selected"></v-list>
    </div>
</template>

<script>
// import { Indicator } from 'mint-ui'
// import { mapState } from 'vuex'
// import * as type from './../../store/modules/type'
import Header from './../header'
import List from './list'
let selectedItemName = 'all'

export default {
  name: 'Topics',
  data () {
    return {
      selected: selectedItemName
    }
  },
  components: {
    'v-list': List,
    'v-header': Header
  },
  watch: {
    selected: function (newselected) {
      selectedItemName = newselected
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.topics
  width 100%
  height 100%
  display flex

  .mint-navbar.is-fixed
    width 100%
    height 55px
    position fixed
    top 55px
    left 0
    right 0

      // .mint-tab-container
      //   flex: 1
      //   width 100%
      //   height 100%
      //   position relative
      //   top 0
      //   left 0
      //   overflow-y auto

.mint-tab-item-label
  font-size 16px

.mint-navbar .mint-tab-item.is-selected
  border-bottom 4px solid green
  color green
  margin-bottom 1px

.mint-tab-item
  border-bottom 5px solid #f0f8ff

.page-infinite-loading
  width 100%
  height 50px
</style>
