import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from './components/Ping.vue';
import ListHome from './views/ListHome.vue';
import StoreList from './views/StoreList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/',
      name: 'ListHome',
      component: ListHome,
    },
    {
      path: '/list/:storeName',
      name: 'StoreList',
      component: StoreList,
    }
  ],
});
