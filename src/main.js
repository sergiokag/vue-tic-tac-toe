import { createApp } from 'vue'
import App from './App.vue'
import { emitter as $bus } from './emitter.js';

const app = createApp(App);
app.config.globalProperties.$bus = $bus;

app.mount('#app');
