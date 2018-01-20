import * as type from './type'

import axios from 'axios'

const mutations = {
  [type.GET_MESSAGE_COUNT] (state, action) {
    state.msg_count = action.data
  },
  [type.GET_MESSAGES] (state, action) {
    state.msgData = action.data
  },
  [type.CLEAR_MESSAGE_DATA] (state, action) {
    state.msg_count = 0
    state.msgData = {}
  }
}

const getters = {
  [type.HAS_NOT_READ_MESSAGE_COUNT] (state) {
    let arr = state.msgData.hasnot_read_messages
    if (arr) {
      return arr.length
    } else {
      return 0
    }
  },
  [type.HAS_READ_MESSAGE_COUNT] (state) {
    let arr = state.msgData.has_read_messages
    if (arr) {
      return arr.length
    } else {
      return 0
    }
  }
}

const actions = {
  [type.GET_MESSAGE_COUNT] (context, payload) {
    axios
      .get('message/count', {
        params: {
          accesstoken: payload.accesstoken
        }
      })
      .then(res => {
        context.commit(type.GET_MESSAGE_COUNT, {
          data: res.data.data
        })
      })
  },
  [type.GET_MESSAGES] (context, payload) {
    axios
      .get('messages', {
        params: {
          accesstoken: payload.accesstoken
        }
      })
      .then(res => {
        context.commit(type.GET_MESSAGES, {
          data: res.data.data
        })
      })
      .catch(err => console.log(err))
  }
}

export default {
  state: {
    msg_count: 0,
    msgData: {
      has_read_messages: [],
      hasnot_read_messages: []
    }
  },
  mutations,
  getters,
  actions
}
