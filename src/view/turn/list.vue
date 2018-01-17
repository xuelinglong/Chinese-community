<template>
    <div class="list">
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="list-all" 
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="70">
            <v-card v-for="subject in subjects" :subject="subject" :key="subject.id"></v-card>
        </div>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle" color="#008000"></mt-spinner>
          <span class="text">加载中...</span>
        </p>
        <div v-show="allLoaded" class="nomore">到底啦～</div>
      </mt-loadmore>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import Card from './../../components/card'
import * as type from './../../store/modules/type'

export default {
  name: 'List',
  data () {
    return {
      page: 0,
      allLoaded: '',
      loading: false,
      bottomStatus: ''
    }
  },
  components: {
    'v-card': Card
  },
  props: ['tabName'],
  computed: mapState({
    subjects (state) {
      return state.topics.topics.data
    }
  }),
  created () {
    this.fetchTopics(this.tabName, 0, 20)
    this.page = 1
    this.checkFullData()
    this.loadFailure()
  },
  watch: {
    tabName: function (newtabName) {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.fetchTopics(this.tabName, 0, 20)
      this.page = 1
      this.checkFullData()
    }
  },
  methods: {
    checkFullData () {
      if (this.subjects.length % 20 !== 0) {
        this.allLoaded = true
        console.log()
      } else {
        this.allLoaded = false
      }
    },
    fetchTopics (tab, page, limit) {
      this.$store.dispatch(type.FETCH_TOPICS, {
        tab: this.tabName,
        page,
        limit
      })
    },
    fetchData (val) {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.page = 1
      switch (val) {
        case 'all':
          this.fetchTopics('all', 0, 20)
          break
        case 'good':
          this.fetchTopics('good', 0, 20)
          break
        case 'weex':
          this.fetchTopics('weex', 0, 20)
          break
        case 'share':
          this.fetchTopics('share', 0, 20)
          break
        case 'ask':
          this.fetchTopics('ask', 0, 20)
          break
        case 'job':
          this.fetchTopics('job', 0, 20)
          break
      }
    },
    loadTop () {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.fetchTopics(this.selected, 0, 20)
      this.page = 1
      this.loadFailure()
      this.$refs.loadmore.onTopLoaded()
    },
    loadMore () {
      if (this.subjects.length !== 0) {
        if (this.subjects.length % 20 === 0) {
          this.loading = true
          this.page += 1
          this.fetchTopics(this.selected, this.page, 20)
          setTimeout(() => {
            this.loading = false
          }, 3000)
          this.loadFailure()
        } else {
          this.allLoaded = true
        }
      }
    },
    loadFailure () {
      if (this.subjects.length / 20 + 1 !== this.page) {
        this.page -= 1
        console.log(this.subjects.length / 20)
        Toast({
          message: '加载失败，请重试',
          position: 'bottom',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list
  width 100%
  height auto

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
      bottom 0
      box-sizing border-box

      .page-infinite-loading
        width 40%
        position relative
        top 0
        left 35%
        bottom 0
        box-sizing border-box
        display flex
        flex-direction row
        mt-spinner
          flex 1
          text-align right
        .text
          flex 1
          text-align left
          color #008000

      .nomore
        width 100%
        height 60px
        background #f0f8ff
        padding 20px 40% 0 40%
        box-sizing border-box
</style>
