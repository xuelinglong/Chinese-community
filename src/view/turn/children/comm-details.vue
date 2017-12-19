<template>
    <div class="comm-details">
        <div class="comm-box" @click="back"></div>
    </div>
</template>

<script>
    // import router from './../../../router/index';
    // import { mapState } from 'vuex';
    import * as type from './../../../store/modules/type';
    export default {
        name: 'Comm-details',
        // computed: mapState({
        //     showDetails(state) {
        //         return state.commentaries.showDetails;
        //     }
        // }),
        methods: {
            back() {
                this.$store.dispatch(type.STATE_SHOW_COMMDETAILS);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .comm-details
        width: 100%
        height: 100%
        position: absolute
        top: 60px
        // bottom: 80px
        margin-top: -60px
        z-index: 10
        background: rgba(0,0,0,0.8)
        .comm-box
            width: 70%
            height: 30%
            position: absolute
            left: 15%
            top: 20%
            background: #008000
</style>
