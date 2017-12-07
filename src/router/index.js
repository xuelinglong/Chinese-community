import Vue from 'vue';
import Router from 'vue-router';
import Topic from '@/view/topic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topic',
      component: Topic
    }
  ]
});
