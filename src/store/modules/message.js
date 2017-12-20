import * as type from './type';

import axios from 'axios';
const HOST = '/api/';

const mutations = {
    [type.GET_MESSAGE_COUNT](state, action) {
        state.msg_count = action.data;
    },
    [type.CLEAR_MESSAGE_DATA](state, action) {
        state.msg_count = 0;
        state.msgData = {};
    }
};

const actions = {
    [type.GET_MESSAGE_COUNT](context, payload) {
        axios.get(HOST + 'message/count', {
            params: {
                accesstoken: payload.accesstoken
            }
        }).then(res => {
            context.commit(type.GET_MESSAGE_COUNT, {
                data: res.data.data
            });
        });
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
