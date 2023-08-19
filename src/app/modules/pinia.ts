import { markRaw } from 'vue';
import { createPinia } from 'pinia';
import type { Router } from 'vue-router';

import { router } from './router';

declare module 'pinia' {
  // For some reason, Intellij (WebStorm) does not recognize types from this interface,
  // but the keys exist and typescript works correctly
  export interface PiniaCustomProperties {
    router: Router;
  }
}

export const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
