import { createApp } from 'vue'
import './style/reset.css'
import './style/style.css'
import App from './App.vue'
import {createPinia} from "pinia";

createApp(App)
    .use(createPinia())
    .mount('#app')
