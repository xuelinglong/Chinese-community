<template>
    <div class="card">
        <div class="msg-bar">
            <div class="img">
                <img :src="subject.author.avatar_url">
            </div>
            <div class="title">{{ subject.title }}</div>
            <div class="label">{{ subject.tab }}</div>
        </div>

        <div class="icon-bar">
            <div class="left-bar">
                {{ subject.author.loginname }} &nbsp {{ subject.tab }}
            </div>

            <div class="right-bar">
                <img class="icon" src="./../assets/eye.png"> {{ subject.visit_count }} 
                &nbsp 
                <img class="icon" src="./../assets/msg.png"> {{ subject.reply_count }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['subject']
    };
</script>

<style lang="stylus" rel="stylesheet">
    .card
        width: 100%
        height: 130px
        // background: pink
        border-bottom: 5px solid #f0f8ff
        .msg-bar
            width: 100%
            height: 80px
            position: relative
            left: 0
            top: 10px
            bottom: 0
            // background: #aaaaaa
            .img
                width: 60px
                height: 60px
                border-radius: 100px
                border: 1px solid #000000
                position: absolute
                left: 20px
                top: 10px
                bottom: 0
                img
                    width: 50px
                    height: 50px
                    border-raduis: 100px
            .title
                width: 55%
                height: 50px
                position: relative
                left: 85px
                top: 15px
                bottom: 0
                text-align: left
                color: #000000
                // border: 1px solid #000000
            .label
                width: 50px
                height: 20px
                position: relative
                left: 80%
                top: -35px
                border: 1px solid #ffffff
                border-radius: 6px
                text-align: center
                color: #ffffff
                background: #aaaaaa
        .icon-bar
            width: 94%
            height: 20px
            margin-top: 10px
            display: flex
            flex-direction: row
            font-size: 0.8rem
            color: #aaaaaa
            .left-bar
                flex: 1
                text-align: left
                padding-left: 20px
            .right-bar
                flex: 1
                text-align: right

    .icon
        position: relative
        top: 2px
        right: 3px
        bottom: 0
</style>
