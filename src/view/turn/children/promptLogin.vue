<template>
    <div class="promptLogin">
        <div class="img">
            <img src="./../../../assets/biker.png">
        </div>
        <div class="message">请登录账号查看！！！</div>
        <button class="login" @click="gotoLogin">登录</button>
    </div>
</template>

<script>
import router from './../../../router/index'
export default {
  name: 'PromptLogin',
  methods: {
    gotoLogin () {
      router.push({name: 'Login'})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.promptLogin
  width 100%
  height 555px
  text-align center

  .img
    width 100px
    height 100px
    position absolute
    left 40%
    top 20%
    bottom 0

    img
      width 100px
      height 100px

  .message
    width 200px
    height 50px
    position absolute
    left 30%
    top 40%

  .login
    width 140px
    height 30px
    position absolute
    top 45%
    left 35%
    bottom 0
    background #008000
    font-size 1.2rem
    color #ffffff
</style>
