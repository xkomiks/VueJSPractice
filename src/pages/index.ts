import type { RouteRecordRaw } from 'vue-router';

export const routes: ReadonlyArray<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
    meta: { isPublic: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./AboutPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./LoginPage.vue'),
    meta: { requiresGuest: true }
  }
];
