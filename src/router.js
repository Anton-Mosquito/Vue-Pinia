import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';

const routes = [
  { path: '/', component: MainPage },
  { path: '/photos', component: () => import('./pages/PhotoPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
