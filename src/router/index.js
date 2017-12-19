import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/tabbar';
import My from '@/view/turn/my';
import Push from '@/view/turn/push';
import Msg from '@/view/turn/msg';
import Subject from '@/components/subject';
import Usertopics from '@/view/turn/children/usertopics';
import UTSubject from '@/view/turn/children/UTSubject';
import Commentaries from '@/view/turn/children/commentaries';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'my',
          name: 'My',
          component: My
          // children: [
          //   {
          //     path: 'usertopics/:title',
          //     name: 'Usertopics',
          //     component: Usertopics
          //   }
          // ]
        },
        {
          path: 'msg',
          name: 'Msg',
          component: Msg
        },
        {
          path: 'push',
          name: 'Push',
          component: Push
        }
      ]
    },
    {
      path: '/subject/:id',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/usertopics/:title',
      name: 'Usertopics',
      component: Usertopics
    },
    {
      path: '/UTSubject/:id',
      name: 'UTSubject',
      component: UTSubject
    },
    {
      path: '/commentaries',
      name: 'Commentaries',
      component: Commentaries
    }
  ]
});
