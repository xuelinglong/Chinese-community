import * as type from './type';

const mutations = {
    [type.STATE_SHOW_COMMDETAILS](state) {
        state.showDetails = !state.showDetails;
    }
};

const actions = {
    [type.STATE_SHOW_COMMDETAILS](context) {
        context.commit(type.STATE_SHOW_COMMDETAILS);
    }
};

export default {
    state: {
        showDetails: false
    },
    mutations,
    actions
};
