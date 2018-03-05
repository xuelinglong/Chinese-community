<template>
    <div class="promptLogin">
        <div class="promptLogin-img">
            <img class="promptLogin-image" src="./../../assets/biker.png">
        </div>
        <div class="promptLogin-message">请登录账号查看！！！</div>
        <button class="promptLogin-button" @click="gotoLogin">登录</button>
    </div>
</template>

<script>
import router from './../../router/index'
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

  .promptLogin-img
    width 100px
    height 100px
    position absolute
    left 40%
    top 20%
    bottom 0

    .promptLogin-image
      width 100px
      height 100px

  .promptLogin-message
    width 200px
    height 50px
    position absolute
    left 30%
    top 40%

  .promptLogin-button
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
