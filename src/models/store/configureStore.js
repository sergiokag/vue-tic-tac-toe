import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

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
const epicEnhancer = applyMiddleware(epicMiddleware);
const enhancers = [epicEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(reducers, composedEnhancers);
epicMiddleware.run(epics);

export default store;
