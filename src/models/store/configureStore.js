import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { reducer as ticTacToeReducer, ticTacToePlayEpic } from '../tic-tac-toe';
import { reducer as playersReducer } from '../players';

const reducers = combineReducers({
    ticTacToe: ticTacToeReducer,
    players: playersReducer,
});

const epics = combineEpics(
    ticTacToePlayEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export default store;
