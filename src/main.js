import { createApp } from 'vue'
import App from './App.vue'

import { emitter as $bus } from './emitter.js';
import { store } from './models/store';

const app = createApp(App);

app.config.globalProperties.$bus = $bus;
app.use(store);

app.mount('#app');
