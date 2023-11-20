import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

sync(store, router);

(createApp(App).config as any).productionTip = false;

import 'bootstrap';
import '@/assets/scss/bootstrap.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/theme.scss';
import 'sweetalert2/src/sweetalert2.scss';

createApp(App).use(store).use(router).mount('#app');
