import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);

app.directive('tooltip', Tooltip);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount('#app');
