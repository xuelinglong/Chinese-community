import * as type from './type'

import axios from 'axios'

const mutations = {
  [type.LOGIN_USER] (state, action) {
    state.loginname = action.data.loginname
    state.success = action.data.success
    state.user.usrArr = action.data
  },
  [type.FETCH_USER] (state, action) {
    state.user.data = action.data.data
  },
  [type.CHANGE_LOGIN_STATE] (state) {
    state.success = true
  },
  [type.LOGOUT] (state) {
    state.success = false
    state.loginname = ''
  },
  [type.CLEAR_USER_DATA] (state) {
    state.user.data = []
    state.user.usrArr = []
  },
  [type.GET_LIST_DATA] (state) {
    state.user.collect_topics = state.user.data.collect_topics
    state.user.recent_replies = state.user.data.recent_replies
    state.user.recent_topics = state.user.data.recent_topics
  },
  [type.CLEAR_LIST_DATA] (state) {
    state.user.collect_topics = []
    state.user.recent_replies = []
    state.user.recent_topics = []
  }
}

const getters = {
  [type.COLLECT_TOPICS] (state) {
    let arr = state.user.data.collect_topics
    if (arr) {
      return arr.length
    } else {
      return 0
    }
  },
  [type.RECENT_REPLIES] (state) {
    let arr = state.user.data.recent_replies
    if (arr) {
      return arr.length
    } else {
      return 0
    }
  },
  [type.RECENT_TOPICS] (state) {
    let arr = state.user.data.recent_topics
    if (arr) {
      return arr.length
    } else {
      return 0
    }
  }
}

const actions = {
  // 接收 post 参数
  // accesstoken   String      用户的 accessToken
  // topic_id      String      被收藏的主题id
  [type.LOGIN_USER] (context) {
    axios
      .post('accesstoken', {
        accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
      })
      .then(res => {
        context.commit(type.LOGIN_USER, {
          data: res.data
        })
        context.dispatch(type.FETCH_USER, {
          loginname: res.data.loginname
        })
      })
      .catch(err => console.log(err))
  },
  [type.FETCH_USER] (context, payload) {
    axios
      .get('user/' + payload.loginname, {
        params: {
          loginname: payload.loginname
        }
      })
      .then(res => {
        context.commit(type.FETCH_USER, {
          data: res.data
        })
        // context.dispatch(type.GET_LIST_DATA);
      })
      .catch(err => console.log(err))
  },
  [type.CHANGE_LOGIN_STATE] (context) {
    context.commit(type.CHANGE_LOGIN_STATE)
  },
  [type.LOGOUT] (context) {
    context.commit(type.LOGOUT)
    context.commit(type.CLEAR_USER_DATA)
    context.commit(type.CLEAR_MESSAGE_DATA)
  },
  [type.GET_LIST_DATA] (context) {
    context.commit(type.GET_LIST_DATA)
  },
  [type.CLEAR_LIST_DATA] (context) {
    context.commit(type.CLEAR_LIST_DATA)
  }
}

export default {
  state: {
    user: {
      data: [],
      usrArr: [],
      collect_topics: [],
      recent_replies: [],
      recent_topics: []
    },
    success: false,
    loginname: '',
    accesstoken: '2cf09343-2162-48c8-88aa-bba001aa155d'
  },
  mutations,
  getters,
  actions
}
