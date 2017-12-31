import * as type from './type';

import axios from 'axios';

// 接收 get 参数
// page     Number      页数
// tab      String      主题分类
// limit    Number      每一页的主题数量
// mdrender String      当为 false 时，不渲染。默认为 false

const mutations = {
    [type.FETCH_TOPICS](state, action) {
        state.topics.data = action.data;
    },
    [type.FETCH_TOPICS_SUBJECT](state, action) {
        state.topics.topicsubject.sub = action.data;
    },
    [type.CLEAR_STATE_DATA](state) {
        state.topics.data = [];
    },
    [type.CLEAR_SUB_DATA](state) {
        state.topics.topicsubject.sub = {};
    },
    [type.COLLECT_TOPIC](state) {
        state.topics.topicsubject.isCollected = true;
    },
    [type.DEL_COLLECTED_TOPIC](state) {
        state.topics.topicsubject.isCollected = false;
    }
};

const actions = {
    [type.FETCH_TOPICS](context, payload) {
        axios.get(`topics`, {
            params: {
                tab: payload.tab,
                page: payload.page,
                limit: payload.limit
            }
        }).then(res => {
            let DATA = res.data.data;
            let arr = context.state.topics.data.concat(DATA);
            if (DATA.length > 0) {
                context.commit(type.FETCH_TOPICS, {
                    data: arr
                });
            }
        }).catch(err => console.log(err));
    },
    [type.FETCH_TOPICS_SUBJECT](context, payload) {
        axios({
            method: 'get',
            url: 'topic/' + payload.id
        }).then(res => {
            let topicSubject = res.data.data;
            context.commit(type.FETCH_TOPICS_SUBJECT, {
                data: topicSubject
            });
        }).catch(err => console.log(err));
    },
    [type.CLEAR_STATE_DATA](context) {
        context.commit(type.CLEAR_STATE_DATA);
    },
    [type.CLEAR_SUB_DATA](context) {
        context.commit(type.CLEAR_SUB_DATA);
    },
    [type.COLLECT_TOPIC](context, payload) {
        axios.post('topic/collect', {
            accesstoken: payload.accesstoken,
            topic_id: payload.topicid
        }).then(res => {
            if (res.data.success) {
                context.commit(type.COLLECT_TOPIC);
                context.dispatch(type.FETCH_USER, {
                    loginname: payload.loginname
                });
            }
        }).catch(err => {
            console.log(err);
        });
    },
    [type.DEL_COLLECTED_TOPIC](context, payload) {
        axios.post('topic/de_collect', {
            accesstoken: payload.accesstoken,
            topic_id: payload.topicid
        }).then(res => {
            if (res.data.success) {
                context.commit(type.DEL_COLLECTED_TOPIC);
                // context.dispatch(type.CLEAR_STATE_DATA);
                context.dispatch(type.FETCH_USER, {
                    loginname: payload.loginname
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }
};

export default {
    state: {
        topics: {
            data: [],
            topicsubject: {
                sub: {
                    author: {
                        avatar_url: '',
                        loginname: ''
                    },
                    author_id: '',
                    content: '',
                    create_at: '',
                    id: '',
                    last_reply_at: '',
                    replies: [],
                    reply_count: 0,
                    tab: '',
                    title: '',
                    top: false,
                    visit_count: 0
                },
                isCollected: false
            }
        },
        page: 0,
        loading: false
    },
    mutations,
    actions
};
