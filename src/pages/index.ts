import type { RouteRecordRaw } from 'vue-router';

export const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./About/AboutView.vue')
  }
];
