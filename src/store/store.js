import Vue from 'vue'
import Vuex from 'vuex'

import topics from './modules/topics'
import user from './modules/user'
import comment from './modules/comment'
import message from './modules/message'
import push from './modules/push'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topics,
    user,
    comment,
    message,
    push
  }
})
