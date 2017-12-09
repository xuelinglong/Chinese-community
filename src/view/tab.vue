<template>
    <div class="tab">
        <mt-navbar v-model="selected">
            <mt-tab-item id="all">全部</mt-tab-item>
            <mt-tab-item id="good">精华</mt-tab-item>
            <mt-tab-item id="weex">weex</mt-tab-item>
            <mt-tab-item id="share">分享</mt-tab-item>
            <mt-tab-item id="ask">问答</mt-tab-item>
            <mt-tab-item id="job">招聘</mt-tab-item>
        </mt-navbar>
        <v-list :tabName="selected" :subjects="subjects"></v-list>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
//    import axios from 'axios';
    import * as type from './../store/modules/type';
//  import fetchTopics from './../store/modules/topics';
    import List from './list';

    export default {
        name: 'Tab',
        data() {
            return {
                selected: 'all',
                // subjects: [],
                page: 0
            };
        },
        components: {
            'v-list': List
        },
        computed: mapState({
            subjects(state) {
                return state.topics.topics.data;
            }
        }),
        // mounted() {
        //     axios.get('https://www.vue-js.com/api/v1/topics')
        //     .then((res) => {
        //         this.subjects = res.data.data.filter((data) => {
        //             return data.tab === 'share';
        //         });
        //     });
        // },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData(val) {
                this.page = 1;
                switch (this.selected) {
                    case 'all':
                        this.fetch('all', 0, 20);
                        break;
                    case 'good':
                        this.fetch('good', 0, 20);
                        break;
                    case 'weex':
                        this.fetch('weex', 0, 20);
                        break;
                    case 'share':
                        this.fetch('share', 0, 20);
                        break;
                    case 'ask':
                        this.fetch('ask', 0, 20);
                        break;
                    case 'job':
                        this.fetch('job', 0, 20);
                        break;
                }
            },
            fetch(tab, page, limit) {
                this.$store.dispatch(type.FETCH_TOPICS, {
                    tab: this.selected,
                    page,
                    limit
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
        width: 100%
        height: 50px
        background: pink

    .mint-tab-item
        border-bottom: 5px solid #f0f8ff

    .mint-tab-item-label
        font-size: 16px

    .mint-navbar .mint-tab-item.is-selected
        border-bottom: 4px solid green
        color: green
        margin-bottom: 1px
</style>
