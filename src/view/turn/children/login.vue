<template>
  <div class="login">
    <v-header></v-header>
    <div class="login-box">
      <div class="accesstoken">
        <img src="./../../../assets/lock.png">
        <input v-model="accesstoken">
      </div>
      <button class="login" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import { mapState } from 'vuex'
import * as type from './../../../store/modules/type'
import router from './../../../router/index'
import Header from './../../header'
export default {
  name: 'Login',
  components: {
    'v-header': Header
  },
  computed: {
    ...mapState({
      accesstoken (state) {
        return state.user.accesstoken
      }
    })
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

    .accesstoken
      width 100%
      height 100px
      display flex
      flex-direction row

      img
        width 30px
        height 30px
        flex 1
      
      input
        flex 7
        height 30px
        font-size 1.2rem
        border-bottom 0.5px solid #aaaaaa

    .login
      width 80%
      height 40px
      font-size 1.2rem
      color #ffffff
      background #008000
</style>
