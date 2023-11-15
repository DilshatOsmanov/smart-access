import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import "bootstrap";
import "@/assets/scss/bootstrap.scss";
import "@/assets/scss/icons.scss";
import "@/assets/scss/theme.scss";

createApp(App).use(store).use(router).mount('#app')
