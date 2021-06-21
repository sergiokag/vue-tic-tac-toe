import { combineReducers, createStore } from 'redux';

import { reducer as ticTacToeReducer } from '../tic-tac-toe';
import { reducer as playersReducer } from '../players';

const reducers = combineReducers({
    ticTacToe: ticTacToeReducer,
    players: playersReducer,
});

const store = createStore(reducers);

export default store;
