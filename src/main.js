// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import store from './store/store';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

// axios
import axios from 'axios';
axios.defaults.baseURL = 'https://www.vue-js.com/api/v1/';   // base url

Vue.config.productionTip = false;

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
