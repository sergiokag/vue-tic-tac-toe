import { createApp } from 'vue'
import App from './App.vue'
import { provideStore } from 'redux-vuex';
import { emitter as $bus } from './emitter.js';

import { store } from './models/store';
import * as actions from './models/actions';

const app = createApp(App);

app.config.globalProperties.$bus = $bus;

provideStore({
    app,
    store,
    actions
});

app.mount('#app');
