import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.css'
import './assets/styles/adaptive.css'

createApp(App).use(router).mount('#app')