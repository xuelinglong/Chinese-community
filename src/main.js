// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.vue-js.com/api/v1/' // base url

Vue.config.productionTip = false

Vue.use(MintUI)

Vue.filter('filterTime', function (value) {
  if (!value) return ''
  let createTime = new Date(value).getTime()
  let now = new Date().getTime()
  let $Date = new Date(value)
  let year = $Date.getFullYear()
  let month = $Date.getMonth() + 1
  let date = $Date.getDate()
  let diffTime = now - createTime
  let diffSeconds = Math.floor(diffTime / 1000)
  let diffMinutes = Math.floor(diffSeconds / 60)
  let diffHours = Math.floor(diffMinutes / 60)
  let diffDays = Math.floor(diffHours / 24)

  if (diffMinutes === 0) {
    return diffSeconds + '秒前'
  }
  if (diffHours === 0) {
    return diffMinutes + '分钟前'
  }
  if (diffDays === 0) {
    return diffHours + '小时前'
  }
  if (diffDays > 0 && diffDays <= 20) {
    return diffDays + '天前'
  }
  if (diffDays > 20) {
    return year + '-' + month + '-' + date
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
