import { createApp } from 'vue';
import App from './App.vue';
import { router } from './Router.ts';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const pinia = createPinia();
const app = createApp(App);

app.config.errorHandler = (err) => {
    console.error('Found', err);
};

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount('#app');
