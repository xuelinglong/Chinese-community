import * as type from './type';

import axios from 'axios';

const mutations = {
    [type.GET_MESSAGE_COUNT](state, action) {
        state.msg_count = action.data;
    },
    [type.GET_MESSAGES](state, action) {
        state.msgData = action.data;
    },
    [type.CLEAR_MESSAGE_DATA](state, action) {
        state.msg_count = 0;
        state.msgData = {};
    }
};

const actions = {
    [type.GET_MESSAGE_COUNT](context, payload) {
        axios.get('message/count', {
            params: {
                accesstoken: payload.accesstoken
            }
        }).then(res => {
            context.commit(type.GET_MESSAGE_COUNT, {
                data: res.data.data
            });
        });
    },
    [type.GET_MESSAGES](context, payload) {
        axios.get('messages', {
            params: {
                accesstoken: payload.accesstoken
            }
        }).then(res => {
            context.commit(type.GET_MESSAGES, {
                data: res.data.data
            });
        }).catch(err => console.log(err));
    }
};

export default {
    state: {
        msg_count: 0,
        msgData: {
            has_read_message: [],
            hasnot_read_message: [
                {
                    id: '',
                    type: '',
                    has_read: false,
                    author: {
                        loginname: '',
                        avatar_url: ''
                    },
                    topic: {
                        id: '',
                        title: '',
                        last_reply_at: ''
                    },
                    reply: {
                        id: '',
                        content: '',
                        ups: [],
                        create_at: ''
                    }
                }
            ]
        }
    },
    mutations,
    actions
};
