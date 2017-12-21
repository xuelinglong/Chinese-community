import * as type from './type';

import axios from 'axios';
const HOST = '/api/';

// import * as api from './api';

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
        state.topics.sub = action.data;
        console.log('* FETCH_TOPICS_SUBJECT被触发了👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩');
    },
    [type.CLEAR_STATE_DATA](state) {
        state.topics.data = [];
        console.log('* CLEAR_STATE_DATA被触发了👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩');
    },
    [type.CLEAR_SUB_DATA](state) {
        state.topics.sub = [];
        console.log('* CLEAR_SUB_DATA被触发了👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩');
    }
};

const actions = {
    [type.FETCH_TOPICS](context, payload) {
        axios.get(HOST + `topics`, {
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
            url: HOST + 'topic/' + payload.id
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
    }
};

export default {
    state: {
        topics: {
            data: [],
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
            }
        }
    },
    mutations,
    actions
};
