import Vue from 'vue';
import Vuex from 'vuex';

import topics from './modules/topics';
import user from './modules/user';
import commentaries from './modules/commentaries';
import message from './modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        topics,
        user,
        commentaries,
        message
    }
});
