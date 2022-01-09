import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // 코드스플리팅
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
  ],
});
