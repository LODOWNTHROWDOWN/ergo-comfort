import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'; // Import the store
import './assets/styles.css';
import 'flowbite/dist/flowbite.js';

createApp(App).use(router).use(store).mount('#app');