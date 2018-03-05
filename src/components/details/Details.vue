<template>
    <div class="details">
        <div class="details-top-box" fixed>
            <img class="details-back" src="./../../assets/back.png" @click="back">
            <router-link :to="{name: 'Comments'}">
            <div class="details-commentaries">
                <div class="details-input">
                    <span class="details-word">说点什么吧</span>
                </div>
                <img class="details-comm-icon" src="./../../assets/commentaries.png">
            </div>
            </router-link>
            <img class="details-star" src="./../../assets/star-null.png"  v-show="!this.isCollected"  @click="star">
            <img class="details-star" src="./../../assets/star-full.png"  v-show="this.isCollected"  @click="star">
        </div>
        <div class="details-title">{{ subject.title }}</div>
        <div class="details-author-box">
            <img class="details-img-author" :src="subject.author.avatar_url">
            <span class="details-name">{{ subject.author.loginname }}</span>
            <span class="details-time">{{ subject.create_at | filterTime }}</span>
        </div>
        <div class="details-content" v-html="subject.content"></div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import router from './../../router/index'
import { mapState } from 'vuex'
import * as type from './../../store/modules/type'
export default {
  name: 'Details',
  created () {
    this.fetchMsg()
  },
  beforeUpdate () {
    if (this.success) {
      this.checkCollected(this.arr, this.$route.params.id)
    }
  },
  beforeDestroy () {
    if (this.isCollected) {
      this.$store.dispatch(type.CLEAR_ISCOLLECTED)
    }
  },
  methods: {
    back () {
      router.go(-1)
      this.$store.dispatch(type.CLEAR_SUB_DATA)
    },
    checkCollected (arr, topicid) {
      function check (arr, topicid) {
        let i
        if (arr) {
          i = arr.length
        } else {
          i = 0
        }
        while (i--) {
          if (arr[i].id === topicid) {
            return true
          }
        }
        return false
      }

      if (check(arr, topicid)) {
        this.$store.commit(type.COLLECT_TOPIC)
      } else {
        this.$store.commit(type.DEL_COLLECTED_TOPIC)
      }
    },
    fetchMsg () {
      this.$store.dispatch(type.FETCH_TOPICS_SUBJECT, {
        id: this.$route.params.id
      })
    },
    gotoLogin () {
      MessageBox.confirm('请登录以继续操作，是否登录？').then(action => {
        router.push({name: 'Login'})
      })
    },
    star () {
      if (this.success === false) {
        this.gotoLogin()
      } else {
        if (this.isCollected) {
          this.$store.dispatch(type.DEL_COLLECTED_TOPIC, {
            accesstoken: this.accesstoken,
            topicid: this.$route.params.id,
            loginname: this.loginname
          })
        } else {
          this.$store.dispatch(type.COLLECT_TOPIC, {
            accesstoken: this.accesstoken,
            topicid: this.$route.params.id,
            loginname: this.loginname
          })
        }
      }
    }
  },
  computed: mapState({
    subject (state) {
      return state.topics.topics.topicsubject.sub
    },
    accesstoken (state) {
      return state.user.accesstoken
    },
    success (state) {
      return state.user.success
    },
    loginname (state) {
      return state.user.loginname
    },
    arr (state) {
      return state.user.user.data.collect_topics
    },
    isCollected (state) {
      return state.topics.topics.topicsubject.isCollected
    }
  }),
  watch: {
    $route (to) {
      this.fetchMsg(to.params.id)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.details
  width 100%
  height 100%
  overflow-x hidden
  text-align left

  .details-top-box
    width 100%
    height 60px
    position fixed
    z-index 10
    box-sizing border-box
    background #f0f8ff

    .details-back
      width 30px
      height 30px
      margin 15px 0 0 20px
      float left

    .details-commentaries
      width 250px
      height 60px
      float left
      display flex
      flex-direction row
      background #f0f8ff

      .details-input
        width 200px
        height 30px
        padding-top 10px
        border 1px solid #aaaaaa
        margin 10px 0 10px 20px

        .details-word
          height 30px
          color #aaaaaa
          margin-top 7px
          font-size 0.9rem

      .details-comm-icon
        width 30px
        height 30px
        margin 15px 0 0 20px

    .details-star
      width 30px
      height 30px
      margin 15px 0px 0px 20px
      float left

  .details-title
    overflow-y auto
    padding 80px 10px 10px 10px
    font-size 1.36rem
    font-weight bold
    text-align center

  .details-author-box
    width 100%
    height 70px
    padding 10px
    box-sizing border-box

    .details-img-author
      width 50px
      height 50px
      border-radius 100%

    .details-name
      font-size 1.2rem
      position relative
      top -20px
      z-index 1

    .details-time
      font-size 1.2rem
      color #aaaaaa
      position relative
      left 40%
      top -20px
      z-index 1

    .details-content
      padding 20px
      width 100%
      height auto
</style>
