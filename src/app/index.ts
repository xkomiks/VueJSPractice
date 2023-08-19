import { createApp } from 'vue';

import { router } from './modules/router';
import { pinia } from './modules/pinia';

import './styles/main.css';
import App from './App.vue';

export const app = createApp(App)
  .use(pinia)
  .use(router);
