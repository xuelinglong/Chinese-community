import * as type from './type';

import axios from 'axios';
const HOST = '/api/';

const mutations = {
    [type.STATE_SHOW_COMMDETAILS](state) {
        state.showDetails = !state.showDetails;
    },
    [type.COLLECT_TOPIC](state, action) {
        state.isCollected = true;
    },
    [type.DEL_COLLECTED_TOPIC](state, action) {
        state.isCollected = false;
    },
    [type.PUSH_REPLIES](state, action) {
        state.pushRepliedData = action.data;
    }
};

const actions = {
    [type.STATE_SHOW_COMMDETAILS](context) {
        context.commit(type.STATE_SHOW_COMMDETAILS);
    },
    [type.COLLECT_TOPIC](context, payload) {
        axios.post('https://www.vue-js.com/api/v1/topic/collect', {
            accesstoken: payload.accesstoken,
            topic_id: payload.topicid
        }).then(res => {
            if (res.data.success) {
                context.commit(type.COLLECT_TOPIC);
                // context.dispatch(type.CLEAR_STATE_DATA);
                context.dispatch(type.FETCH_USER, {
                    loginname: payload.loginname
                });
            }
        }).catch(err => {
            console.log(err);
        });
    },
    [type.DEL_COLLECTED_TOPIC](context, payload) {
        axios.post('https://www.vue-js.com/api/v1/topic/de_collect', {
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
    },
    [type.PUSH_REPLIES](context, payload) {
        // const url = HOST + 'topic/' + payload.topicid + '/replies';
        axios.post(HOST + 'topic/' + payload.topicid + '/replies', {
            accesstoken: payload.accesstoken,
            content: payload.content,
            reply_id: payload.replyid
        }).then(res => {
            context.commit(type.PUSH_REPLIES, {
                data: res.data.data
            });
        }).catch(err => console.log(err));
    }
};

export default {
    state: {
        showDetails: false,
        isCollected: false,
        pushRepliedData: []
    },
    mutations,
    actions
};
