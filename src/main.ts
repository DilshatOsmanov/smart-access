import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

sync(store, router);

(createApp(App).config as any).productionTip = false;

import 'bootstrap';
import '@/assets/scss/bootstrap.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/theme.scss';

createApp(App).use(store).use(router).mount('#app');
