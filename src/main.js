import './assets/main.css'
import './assets/bootstrap/js/bootstrap5.0.2_dist_js_bootstrap.bundle.min'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
