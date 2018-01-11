<template>
    <div class="list">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="list-all">
            <v-card v-for="subject in subjects" :subject="subject" :key="subject.id"></v-card>
        </div>
        <div class="msg" v-show="this.allLoaded">到底啦~</div>
      </mt-loadmore>
    </div>
</template>

<script>
import { Indicator, Toast } from 'mint-ui'
import { mapState } from 'vuex'
import Card from './../../components/card'
import * as type from './../../store/modules/type'

export default {
  name: 'List',
  data () {
    return {
      page: 0,
      loading: false,
      allLoaded: false,
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
  mounted () {
    this.fetch(this.tabName, 0, 20)
    this.page = 1
    console.log(`mounted`)
  },
  watch: {
    tabName: function (newtabName) {
      this.allLoaded = false
      this.bottomStatus = 'pull'
      this.$store.dispatch(type.CLEAR_STATE_DATA)
      this.page = 1
      this.fetch(this.tabName, 0, 20)
    }
  },
  methods: {
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
    },
    loadBottom () {
      this.page += 1
      this.fetch(this.selected, this.page, 20)
      if (this.subjects.length % 20 !== 0) {
        this.allLoaded = true
        this.bottomStatus = 'null'
      }
      this.$refs.loadmore.onBottomLoaded()
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
    bottom 6px
    overflow-y auto

    .mint-loadmore-content
      width 100%
      height 100%
      position relative
      top 0
      left 0
      bottom: 0
      overflow-y: auto

      .msg
        width: 100%
        height: 60px
        display: flex
        background: #f0f8ff
        padding: 20px 42% 0 42%
        box-sizing: border-box
</style>
