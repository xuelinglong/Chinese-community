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

    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <mt-tab-container v-model="selected"
            v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="70">

            <mt-tab-container-item id="all">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="good">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="weex">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="share">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="ask">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="job">
                <v-list :tabName="selected" :subjects="subjects"></v-list>
            </mt-tab-container-item>

        </mt-tab-container>
    </mt-loadmore>

    </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
import Header from './../header'
import List from './list'

export default {
  name: 'Topics',
  data () {
    return {
      selected: 'all',
      // subjects: [],
      page: 0,
      loading: false,
      allLoaded: false
    }
  },
  components: {
    'v-list': List,
    'v-header': Header
  },
  computed: mapState({
    subjects (state) {
      return state.topics.topics.data
    }
  }),
  watch: {
    selected: function (newselected) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.fetchData(this.selected)
      setTimeout(() => Indicator.close(), 300)
    }
  },
  created () {
    if (this.subjects.length === 0) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.fetch('all', 0, 20)
      this.page = 1
      setTimeout(() => Indicator.close(), 300)
    }
  },
  methods: {
    fetchData (val) {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.page = 1
      switch (val) {
        case 'all':
          this.fetch('all', 0, 20)
          break
        case 'good':
          this.fetch('good', 0, 20)
          break
        case 'weex':
          this.fetch('weex', 0, 20)
          break
        case 'share':
          this.fetch('share', 0, 20)
          break
        case 'ask':
          this.fetch('ask', 0, 20)
          break
        case 'job':
          this.fetch('job', 0, 20)
          break
      }
    },
    fetch (tab, page, limit) {
      this.$store.dispatch(type.FETCH_TOPICS, {
        tab: this.selected,
        page,
        limit
      })
    },
    loadMore () {
      if (this.subjects.length !== 0) {
        if (this.subjects.length % 20 !== 0) {
          Toast({
            message: '没有更多数据了',
            duration: 700
          })
        } else {
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          })
          setTimeout(() => {
            this.loading = true
            this.page += 1
            this.fetch(this.selected, this.page, 20)
            this.loading = false
            Indicator.close()
          }, 1000)
        }
      }
    },
    loadTop () {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      for (let i = 0; i < this.page; i++) {
        this.fetch(this.selected, i, 20)
      }
      this.$refs.loadmore.onTopLoaded()
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

  .mint-loadmore
    flex 1
    width 100%
    position fixed
    top 110px
    left 0
    right 0
    bottom 56px
    overflow-y auto

    .mint-loadmore-content
      width 100%
      height 100%
      position relative
      top 0
      left 0

      .mint-tab-container
        // flex: 1
        width 100%
        height 100%
        position relative
        top 0
        left 0
        overflow-y auto

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
