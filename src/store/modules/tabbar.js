import * as type from './type';

const mutations = {
    [type.CHANGE_TABBAR_STATE](state, payload) {
        state.tabState = payload.type;
    }
};

export default {
    state: {
        tabState: 'topics'
    },
    mutations
};
