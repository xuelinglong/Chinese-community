<template>
    <div class="usertopics">
        <div class="usertopics-top-bar" fixed>
            <img class="usertopics-img-back" src="./../../../assets/close.png" @click="back">
            <span class="usertopics-title">{{ this.$route.params.title }} ( {{ lists.length }} )</span>
        </div>
        <div class="usertopics-list">
            <div class="usertopics-list-item" v-for="list in lists" :key="list.id">
                <router-link :to="{name: 'Subject', params:{id: list.id}}">
                  <div class="usertopics-img">
                      <img class="usertopics-img-author" :src="list.author.avatar_url">
                  </div>
                  <div class="usertopics-msg-box">
                      <span class="usertopics-title">{{ list.title }}</span>
                      <span class="usertopics-id">{{ list.author.loginname }}</span>
                  </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as type from './../../../store/modules/type'
import router from './../../../router/index'
export default {
  name: 'Usertopics',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.$store.dispatch(type.GET_LIST_DATA)
    let TYPE = this.$route.params.title
    switch (TYPE) {
      case '我收藏的话题':
        this.lists = this.collect_topics
        break
      case '我参与的话题':
        this.lists = this.recent_replies
        break
      case '我最近的话题':
        this.lists = this.recent_topics
        break
    }
  },
  methods: {
    back () {
      router.go(-1)
      this.$store.dispatch(type.CLEAR_LIST_DATA)
    }
  },
  computed: mapState({
    collect_topics (state) {
      return state.user.user.collect_topics
    },
    recent_replies (state) {
      return state.user.user.recent_replies
    },
    recent_topics (state) {
      return state.user.user.recent_topics
    }
  })
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.usertopics
  width 100%
  height 100%
  color #000000
  text-align left
  background #f0f0f0

  .usertopics-top-bar
    width 100%
    height 60px
    position fixed
    box-sizing border-box
    padding 10px 20px
    background #008000

    .usertopics-img-back
      width 40px
      height 40px
      float left

    .usertopics-title
      width 250px
      height 40px
      float left
      padding 0 5px
      color #ffffff
      font-size 1.5rem
      box-sizing border-box

  .usertopics-list
    width 100%
    overflow-y auto
    padding-top 60px

    .usertopics-list-item
      width 100%
      height 100px
      padding 20px
      border-bottom 10px solid #f0f0f0
      box-sizing border-box
      background #ffffff

      & > a
        text-decoration none
        color #000000

        .usertopics-img
          width 50px
          height 50px
          float left

          .usertopics-img-author
            width 50px
            height 50px

        .usertopics-msg-box
          width 270px
          height 60px
          display flex
          flex-direction column
          float right

          .usertopics-title
            width 100%
            height 40px
            font-size 0.9rem
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical

          .usertopics-id
            flex 1
            width 100%
            height 20px
            font-size 0.8rem
            color #92a8ce
</style>
