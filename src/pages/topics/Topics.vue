<template>
    <div class="topics">
        <app-header></app-header>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="good">精华</mt-tab-item>
            <mt-tab-item id="weex">weex</mt-tab-item>
            <mt-tab-item id="share">分享</mt-tab-item>
            <mt-tab-item id="ask">问答</mt-tab-item>
            <mt-tab-item id="job">招聘</mt-tab-item>
        </mt-navbar>

        <topics-list :tabName="selected"></topics-list>
    </div>
</template>

<script>
import Header from './../../components/header/Header'
import TopicsList from './TopicsList'
let selectedItemName = 'all'

export default {
  name: 'Topics',
  components: {
    'topics-list': TopicsList,
    'app-header': Header
  },
  data () {
    return {
      selected: selectedItemName
    }
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
