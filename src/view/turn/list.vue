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
        <div class="msg" v-show="this.allLoaded">到底啦~</div>
      </mt-loadmore>
    </div>
</template>

<script>
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
    this.fetch(this.tabName, 0, 20)
    this.page = 1
    this.check()
  },
  watch: {
    tabName: function (newtabName) {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.fetch(this.tabName, 0, 20)
      this.page = 1
      this.check()
    }
  },
  methods: {
    check () {
      if (this.subjects.length % 20 !== 0) {
        this.allLoaded = true
        console.log()
      } else {
        this.allLoaded = false
      }
    },
    fetch (tab, page, limit) {
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
    loadTop () {
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      for (let i = 0; i < this.page; i++) {
        this.fetch(this.selected, i, 20)
      }
      this.$refs.loadmore.onTopLoaded()
    },
    loadMore () {
      if (this.subjects.length !== 0) {
        if (this.subjects.length % 20 === 0) {
          this.loading = true
          this.page += 1
          this.fetch(this.selected, this.page, 20)
          setTimeout(() => {
            this.loading = false
          }, 3000)
        } else {
          this.allLoaded = true
        }
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

      .msg
        width 100%
        height 60px
        display flex
        background #f0f8ff
        padding 20px 42% 0 42%
        box-sizing border-box
      
</style>
