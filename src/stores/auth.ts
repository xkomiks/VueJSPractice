import { defineStore } from 'pinia';

interface User {
  email: string;
}

interface AuthState {
  isAuthenticationLoading: boolean;
  user: null | User;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticationLoading: true,
    user: null
  }),
  actions: {
    async authenticate() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.isAuthenticationLoading = false;
          // this.user = { email: 'test@gmail.com' };
          resolve(undefined);
        }, 2000);
      });
    },
    async login() {
      try {
        this.user = { email: 'test@gmail.com' };
        const redirectTo = this.router.currentRoute.value.query.redirectTo;
        if (!redirectTo || typeof redirectTo === 'string') {
          void this.router.push(redirectTo || '/');
        }
      } catch (err) {
        console.error('error', err);
      }
    },
    async logout() {
      this.user = null;
      void this.router.push('/');
    }
  }
});
