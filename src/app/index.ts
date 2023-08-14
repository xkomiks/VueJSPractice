import './styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './router';

export const app = createApp(App)
  .use(createPinia())
  .use(router);
