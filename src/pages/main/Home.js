import { createApp } from 'vue'
import App from './Home.vue'
import Router from "@/pages/main/router/Router";
const app = createApp(App)
app.use(Router)
app.mount('#app')
