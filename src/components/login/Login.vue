<template>
  <div class="login">
    <app-header></app-header>
    <div class="login-box">
      <div class="login-accesstoken">
        <img class="login-img" src="./../../assets/lock.png">
        <input class="login-input" v-model="accesstoken">
      </div>
      <button class="login-button" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import * as type from './../../store/modules/type'
import router from './../../router/index'
import { getCookie } from './../../assets/js/cookie'
import Header from './../header/Header'
export default {
  name: 'Login',
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
    back () {
      router.go(-1)
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
      this.back()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  height 100%
  background #f0f0f0

  .login-box
    width 100%
    position fixed
    top 56px
    left 0
    bottom 0
    padding 50px
    box-sizing border-box

    .login-accesstoken
      width 100%
      height 100px
      display flex
      flex-direction row

      .login-img
        width 30px
        height 30px
        flex 1
      
      .login-input
        flex 7
        height 30px
        font-size 1.2rem
        border-bottom 0.5px solid #aaaaaa

    .login-button
      width 80%
      height 40px
      font-size 1.2rem
      color #ffffff
      background #008000
</style>
