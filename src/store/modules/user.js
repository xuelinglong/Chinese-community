import * as type from './type';

import axios from 'axios';
const HOST = '/api/';

const mutations = {
    [type.FETCH_USER](state, action) {
        state.user.data = action.data;
    },
    [type.CHANGE_LOGIN_STATE](state) {
        state.success = !state.login;
    }
};

const actions = {
    // 接收 post 参数
    // accesstoken   String      用户的 accessToken
    // topic_id      String      被收藏的主题id
    [type.FETCH_USER](context, payload) {
        axios({
            method: 'post',
            url: HOST + payload.accesstoken,
            params: {
                accesstoken: payload.accesstoken
            }
        }).then(res => {
            let DATA = res.data.data;
            let arr = context.state.user.data.concat(DATA);
            if (DATA.length > 0) {
                context.commit(type.FETCH_USER, {
                    data: arr
                });
            }
        }).catch(err => console.log(err));
    },
    [type.CHANGE_LOGIN_STATE](context) {
        context.commit(type.CHANGE_LOGIN_STATE);
    }
};

export default {
    state: {
        user: {
            data: []
        },
        success: false,
        accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
    },
    mutations,
    actions
};
