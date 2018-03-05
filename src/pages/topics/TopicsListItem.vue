<template>
<router-link :to="{name: 'Subject', params:{id: subject.id}}">
    <div class="topicsListItem">
        <div class="topicsListItem-bar">
            <div class="topicsListItem-img">
                <img class="topicsListItem-image" :src="subject.author.avatar_url">
            </div>
            <div class="topicsListItem-title">{{ subject.title }}</div>
            <div class="topicsListItem-label">{{ subject.tab }}</div>
        </div>

        <div class="topicsListItem-icon-bar">
            <div class="topicsListItem-left-bar">
                {{ subject.author.loginname }} {{ subject.create_at | filterTime }}
            </div>

            <div class="topicsListItem-right-bar">
                <img class="topicsListItem-icon" src="./../../assets/eye.png"> {{ subject.visit_count }}
                &nbsp;
                <img class="topicsListItem-icon" src="./../../assets/msg.png"> {{ subject.reply_count }}
            </div>
        </div>
    </div>
</router-link>
</template>

<script>
export default {
  name: 'TopicsListItem',
  props: {
    subject: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
.topicsListItem
  width 100%
  height 130px
  border-bottom 5px solid #f0f8ff

  .topicsListItem-bar
    width 100%
    height 80px
    position relative
    left 0
    top 10px
    bottom 0

    .topicsListItem-img
      width 60px
      height 60px
      border-radius 30px
      position absolute
      left 20px
      top 10px
      bottom 0

      .topicsListItem-image
        width 60px
        height 60px
        border-radius 30px

    .topicsListItem-title
      width 55%
      height 50px
      position relative
      left 85px
      top 15px
      bottom 0
      text-align left
      color #000000
      // border: 1px solid #000000
      // display: -webkit-box
      // -webkit-box-orient: vertical
      // -webkit-line-clamp: 2
      line-height 25px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap

    .topicsListItem-label
      width 50px
      height 20px
      position relative
      left 80%
      top -35px
      border 1px solid #ffffff
      border-radius 6px
      text-align center
      color #ffffff
      background #aaaaaa

  .topicsListItem-icon-bar
    width 94%
    height 20px
    margin-top 10px
    display flex
    flex-direction row
    font-size 0.8rem
    color #aaaaaa

    .topicsListItem-left-bar
      flex 1
      text-align left
      padding-left 20px

    .topicsListItem-right-bar
      flex 1
      text-align right

      .topicsListItem-icon
        position relative
        top 2px
        right 3px
        bottom 0

& > a
  text-decoration none
</style>
