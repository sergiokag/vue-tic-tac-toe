import { createApp } from 'vue'
import App from './App.vue'
import { provideStore } from 'redux-vuex';
import { emitter as $bus } from './emitter.js';

import { store } from './models/store';
import { actions as ticTacToeActions } from './models/tic-tac-toe';
import { actions as playersActions } from './models/players';

import useGameModel from './models/game';

const app = createApp(App);

app.config.globalProperties.$bus = $bus;

provideStore({
    app,
    store,
    actions: {
        ...playersActions,
        ...ticTacToeActions,
    }
});

app.mount('#app');

export const GameModel = useGameModel(store);
