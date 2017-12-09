import * as type from './type';

// import axios from 'axios';
// const HOST = '/api/';

import * as api from './api';

// 接收 get 参数
// page     Number      页数
// tab      String      主题分类
// limit    Number      每一页的主题数量
// mdrender String      当为 false 时，不渲染。默认为 false

const mutations = {
    [type.FETCH_TOPICS](state, payload) {
        state.topics.data = state.topics.data.concat(payload.data);
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
    [type.FETCH_TOPICS](context, payload) {
        api.fetchTopics(payload.type, { page: payload.page, limit: payload.limit })
            .then(data => context.commit(type.FETCH_TOPICS, {
                type: payload.tab,
                data: data.data
            }));
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
