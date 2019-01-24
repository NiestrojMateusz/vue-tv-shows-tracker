import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './components/Main.vue';
import ShowDetails from './components/ShowDetails.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: ShowDetails
    }
  ]
});
