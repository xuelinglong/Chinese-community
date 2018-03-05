<template>
    <div class="user">
        <app-header></app-header>
        <div class="user-login-view" v-if="success === false">
            <div class="user-accesstoken">
                <img class="user-lock-image" src="./../../assets/lock.png">
                <input class="user-input" v-model="accesstoken">
            </div>

            <button class="user-registration">注册</button>
            <button class="user-login" @click="go">登录</button>
        </div>

        <div class="user-view" v-if="success != false">
            <div class="user-msg-box">
                <div class="user-img"><img :src="usr.avatar_url"></div>
                <div class="user-msg">
                    <div class="user-loginname">{{ usr.loginname }}</div>
                    <div class="user-id">ID:{{ USRARR.id }}</div>
                </div>
            </div>
            <div class="user-details-box">
                <mt-cell title="我收藏的话题" is-link :to="{name: 'Usertopics', params: {title: '我收藏的话题'}}">
                    <img slot="icon" src="./../../assets/star-full.png" width="24" height="24">
                    <span style="color: green">{{ COLLECT_TOPICS }}</span>
                </mt-cell>
                <mt-cell title="我参与的话题" is-link :to="{name: 'Usertopics', params: {title: '我参与的话题'}}">
                    <img slot="icon" src="./../../assets/comment.png" width="24" height="24">
                    <span style="color: green">{{ RECENT_REPLIES }}</span>
                </mt-cell>
                <mt-cell title="我最近的话题" is-link :to="{name: 'Usertopics', params: {title: '我最近的话题'}}">
                    <img slot="icon" src="./../../assets/footprint.png" width="24" height="24">
                    <span style="color: green">{{ RECENT_TOPICS }}</span>
                </mt-cell>
            </div>
            <div class="user-logout" @click="logout">退出登录</div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { mapState, mapGetters } from 'vuex'
import * as type from './../../store/modules/type'
import { getCookie } from './../../assets/js/cookie'
import Header from './../../components/header/Header'
export default {
  name: 'User',
  components: {
    'app-header': Header
  },
  data () {
    return {
      accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
    }
  },
  created () {
    let cookie = getCookie('accesstoken')
    if (cookie) {
      this.accesstoken = cookie
    }
  },
  methods: {
    go () {
      this.login()
    },
    login () {
      this.$store.dispatch(type.LOGIN_USER, {
        accesstoken: this.accesstoken
      })
      Indicator.open()
      setTimeout(() => Indicator.close(), 100)
      this.$store.dispatch(type.GET_MESSAGE_COUNT, {
        accesstoken: this.accesstoken
      })
      this.$store.dispatch(type.GET_MESSAGES, {
        accesstoken: this.accesstoken
      })
    },
    logout () {
      this.$store.dispatch(type.LOGOUT)
    }
  },
  computed: {
    ...mapState({
      success (state) {
        return state.user.success
      },
      USRARR (state) {
        return state.user.user.usrArr
      },
      usr (state) {
        return state.user.user.data
      }
    }),
    ...mapGetters([
      'COLLECT_TOPICS',
      'RECENT_REPLIES',
      'RECENT_TOPICS'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.user
  width 100%
  height 100%
  display flex
  text-align center

  .user-login-view
    flex 1
    width 100%
    position relative
    top 56px
    left 0
    background #f0f0f0

    .user-accesstoken
      width 70%
      height 30px
      display flex
      flex-direction row
      position absolute
      top 56px
      left 15%

      .user-lock-image
        flex 1
        width 30px
        height 30px

      .user-input
        flex 7
        width 70%
        height 30px
        font-size 1rem
        background #f0f0f0
        // border: 1px solid #aaaaaa

    .user-registration
      width 80%
      height 40px
      position absolute
      left 10%
      top 120px
      font-size 1.2rem
      background #ffffff
      border-radius 3px
      border 1px solid #fcfcfc

    .user-login
      width 80%
      height 40px
      position absolute
      left 10%
      top 170px
      font-size 1.2rem
      color #ffffff
      background #008000
      border-radius 3px
      border 1px solid #008000

  .user-view
    flex 1
    width 100%
    // height: 555px;
    position relative
    top 56px
    left 0
    overflow hidden
    overflow-y hidden
    background #f0f0f0

    .user-msg-box
      width 100%
      height 80px
      padding 5px 10px
      box-sizing border-box
      border-top 15px solid #f0f0f0
      background #ffffff

      .user-img
        width 50px
        height 50px
        float left

      .user-msg
        width 85%
        height 50px
        float right
        display flex
        flex-direction column
        text-align left

        .user-loginname
          width 100%
          height 25px
          flex 1
          font-size 1.2rem
          padding-left 10px
          box-sizing border-box

        .user-id
          width 100%
          height 25px
          flex 1
          font-size 0.9rem
          padding-left 10px
          box-sizing border-box

    .user-details-box
      width 100%
      height auto
      text-align left
      border-top 15px solid #f0f0f0
      background #ffffff

    .user-logout
      width 100%
      height 40px
      display block
      font-size 1.3rem
      text-align center
      background #ffffff
      margin-top 20px
</style>
