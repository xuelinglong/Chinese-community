import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Tabbar'
import Details from '@/components/details/Details'
import Usertopics from '@/pages/user/usertopics/Usertopics'
import Comments from '@/components/comments/Comments'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/subject/:id',
      name: 'Subject',
      component: Details
    },
    {
      path: '/usertopics/:title',
      name: 'Usertopics',
      component: Usertopics,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
