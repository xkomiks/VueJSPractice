import type { NavigationGuardWithThis } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export const auth: NavigationGuardWithThis<undefined> = async (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticationLoading) {
    await authStore.authenticate();
  }
  if (authStore.isLoggingIn && to.meta.requiresGuest) {
    return next('/');
  }
  if (!authStore.isLoggingIn && to.meta.requiresAuth) {
    return next({ path: '/login', query: { redirectTo: to.fullPath } });
  }
  return next();
};
