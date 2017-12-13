import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/tabbar';
import Subject from '@/components/subject';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/subject/:id',
      name: 'Subject',
      component: Subject
    }
  ]
});
