import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./Router.ts";
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)

app.config.errorHandler = (err) => {
  console.error("Found", err);
};

app.use(router)
app.use(pinia)
app.mount('#app')
