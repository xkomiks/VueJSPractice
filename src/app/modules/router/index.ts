import { createRouter, createWebHistory } from 'vue-router';

import { routes } from '@/pages';

import { auth } from './middlewares/auth';

declare module 'vue-router' {
  interface RouteMeta {
    isPublic?: boolean; // Accessible to all users
    requiresAuth?: boolean; // Requires authentication
    requiresGuest?: boolean; // Requires guest (non-authenticated) status
  }
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(auth);
