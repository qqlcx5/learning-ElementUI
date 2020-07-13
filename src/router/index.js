import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () =>
      import(/* webpackChunkName: "toast" */ '../views/Toast.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () =>
      import(/* webpackChunkName: "button" */ '../views/Button.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () =>
      import(/* webpackChunkName: "message" */ '../views/Message.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () =>
      import(/* webpackChunkName: "input" */ '../views/Input.vue')
  },
  {
    path: '/popover',
    name: 'Popover',
    component: () =>
      import(/* webpackChunkName: "popover" */ '../views/Popover.vue')
  },
  {
    path: '/autocomplete',
    name: 'Autocomplete',
    component: () =>
      import(/* webpackChunkName: "popover" */ '../views/Autocomplete.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
