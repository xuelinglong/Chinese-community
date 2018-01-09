import * as type from './type'

import axios from 'axios'

const mutations = {
  [type.CHANGE_MARKDOWNSHOW_STATE] (state) {
    state.markdownShow = !state.markdownShow
  },
  [type.SAVE_PUSH_CONTENT] (state, action) {
    state.contentData = action.data
  },
  [type.CLEAR_PUSH_CONTENT] (state) {
    state.contentData = []
    // state.title = [];
  },
  [type.PUSH_NEW_TOPIC] (state, action) {
    state.push.data = action.data
  }
}

const actions = {
  [type.CHANGE_MARKDOWNSHOW_STATE] (context) {
    context.commit(type.CHANGE_MARKDOWNSHOW_STATE)
  },
  [type.SAVE_PUSH_CONTENT] (context, payload) {
    context.commit(type.SAVE_PUSH_CONTENT, {
      data: payload.contentData
    })
  },
  [type.CLEAR_PUSH_CONTENT] (context) {
    context.commit(type.CLEAR_PUSH_CONTENT)
  },
  [type.PUSH_NEW_TOPIC] (context, payload) {
    axios
      .post('topics', {
        accesstoken: payload.accesstoken,
        title: payload.title,
        tab: payload.tab,
        content: payload.content
      })
      .then(res => {
        context.commit(type.PUSH_NEW_TOPIC, {
          data: res.data.data
        })
        context.dispatch(type.CLEAR_PUSH_CONTENT)
        context.dispatch(type.FETCH_USER, {
          loginname: payload.loginname
        })
      })
      .catch(err => console.log(err))
  }
}

export default {
  state: {
    push: {
      data: {
        success: false,
        topic_id: ''
      }
    },
    contentData: [],
    // title: '',
    markdownShow: false
  },
  mutations,
  actions
}
