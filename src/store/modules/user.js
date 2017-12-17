import * as type from './type';

import axios from 'axios';
const HOST = '/api/';

const mutations = {
    [type.LOGIN_USER](state, action) {
        // state.user.loginname = action.data.loginname;
        state.success = action.data.success;
    },
    [type.FETCH_USER](state, action) {
        state.user.data = action.data.data;
        // state.success = true;
    },
    [type.CHANGE_LOGIN_STATE](state) {
        state.success = true;
    },
    [type.LOGOUT](state) {
        state.success = false;
    },
    [type.CLEAR_USER_DATA](state) {
        state.user.data = [];
    }
};

const actions = {
    // 接收 post 参数
    // accesstoken   String      用户的 accessToken
    // topic_id      String      被收藏的主题id
    [type.LOGIN_USER](context, payload) {
        axios({
            method: 'post',
            url: HOST + 'accesstoken',
            params: {
                accesstoken: payload.accesstoken
            }
        }).then(res => {
            context.commit(type.LOGIN_USER, {
                data: res.data
            });
        }).catch(err => console.log(err));
    },
    [type.FETCH_USER](context, payload) {
        axios({
            method: 'get',
            url: HOST + 'user/' + payload.loginname
        }).then(res => {
            context.commit(type.FETCH_USER, {
                data: res.data
            });
        }).catch(err => console.log(err));
    },
    [type.CHANGE_LOGIN_STATE](context) {
        context.commit(type.CHANGE_LOGIN_STATE);
    },
    [type.LOGOUT](context) {
        context.commit(type.LOGOUT);
        context.commit(type.CLEAR_USER_DATA);
    }
};

export default {
    state: {
        user: {
            data: [],
            loginname: ''
        },
        success: false
        // accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
    },
    mutations,
    actions
};
