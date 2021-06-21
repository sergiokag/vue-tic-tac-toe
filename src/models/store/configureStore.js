import { combineReducers, createStore } from 'redux';

import { reducer as ticTacToeReducer } from '../tic-tac-toe/reducer';
import { reducer as playersReducer } from '../players/reducer';

const reducers = combineReducers({
    ticTacToe: ticTacToeReducer,
    players: playersReducer,
});

const store = createStore(reducers);

export default store;
