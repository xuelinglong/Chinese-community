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
    // [type.FETCH_TOPICS](state, payload) {
    //     state.topics.data = state.topics.data.concat(payload.data);
    //     console.log('* ' + payload.limit, payload.page);
    // },
    [type.FETCH_TOPICS](state, action) {
        state.topics.data = action.data;
    }
};

const actions = {
    // [type.FETCH_TOPICS](context, payload) {
    //     axios(HOST + `topics`, {
    //         params: {
    //             tab: payload.tab,
    //             page: payload.page,
    //             limit: payload.limit
    //         }
    //     })
    //     .then(res => {
    //         context.state.data = context.state.data.concat(res.data.data);
    //         context.commit(type.FETCH_TOPICS, {
    //             data: context.state.data
    //         });
    //     }).catch(err => console.log(err));
    // }
    // [type.FETCH_TOPICS](context, payload) {
    //     api.fetchTopics(payload.type, { page: payload.page, limit: payload.limit })
    //         .then(data => context.commit(type.FETCH_TOPICS, {
    //             type: payload.tab,
    //             limit: payload.limit,
    //             data: data.data
    //         }));
    //         console.log('* 此时limit：' + payload.limit);
    // },
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
    }
};

export default {
    state: {
        topics: {
            data: []
        }
    },
    mutations,
    actions
};
