import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import { emitter as $bus } from './emitter.js';
import { store } from './models/store';

const app = createApp(App);

app.config.globalProperties.$bus = $bus;
app.use(Vuex);

console.log(store);

app.mount('#app');
