import { defineStore } from 'pinia';

interface User {
  email: string;
}

interface AuthState {
  isAuthenticationLoading: boolean;
  isLoggingIn: boolean;
  user: null | User;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticationLoading: true,
    isLoggingIn: false,
    user: null
  }),
  actions: {
    async authenticate() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.isAuthenticationLoading = false;
          // this.user = { email: 'test@gmail.com' };
          // this.isLoggingIn = true;
          resolve(undefined);
        }, 2000);
      });
    },
    async login() {
      try {
        this.user = { email: 'test@gmail.com' };
        this.isLoggingIn = true;
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
      this.isLoggingIn = false;
      void this.router.push('/');
    }
  }
});
