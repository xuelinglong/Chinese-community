import * as type from './type'

import axios from 'axios'

const mutations = {
  [type.STATE_SHOW_COMMDETAILS] (state) {
    state.showDetails = !state.showDetails
  },
  [type.PUSH_REPLIES] (state, action) {
    state.pushRepliedData = action.data
  },
  [type.UPS_REPLY] (state, action) {
    state.upsData = action.data
  }
}

const actions = {
  [type.STATE_SHOW_COMMDETAILS] (context) {
    context.commit(type.STATE_SHOW_COMMDETAILS)
  },
  [type.PUSH_REPLIES] (context, payload) {
    axios
      .post('topic/' + payload.topicid + '/replies', {
        accesstoken: payload.accesstoken,
        content: payload.content,
        reply_id: payload.replyid
      })
      .then(res => {
        context.commit(type.PUSH_REPLIES, {
          data: res.data.data
        })
        context.dispatch(type.FETCH_USER, {
          loginname: payload.loginname
        })
        context.dispatch(type.FETCH_TOPICS_SUBJECT, {
          id: payload.topicid
        })
      })
      .catch(err => console.log(err))
  },
  [type.UPS_REPLY] (context, payload) {
    axios
      .post('reply/' + payload.replyid + '/ups', {
        accesstoken: payload.accesstoken
      })
      .then(res => {
        context.commit(type.UPS_REPLY, {
          data: res.data.data
        })
        context.dispatch(type.FETCH_TOPICS_SUBJECT, {
          id: payload.topicid
        })
      })
      .catch(err => console.log(err))
  }
}

export default {
  state: {
    showDetails: false,
    // isCollected: false,
    pushRepliedData: [],
    upsData: {
      success: false,
      action: ''
    }
  },
  mutations,
  actions
}
