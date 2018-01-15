import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/tabbar'
import Subject from '@/components/subject'
import Usertopics from '@/view/turn/children/usertopics'
import Commentaries from '@/view/turn/children/commentaries'

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
      component: Subject
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
      path: '/commentaries',
      name: 'Commentaries',
      component: Commentaries
    }
  ]
})
