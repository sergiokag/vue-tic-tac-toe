import { applyMiddleware, createStore } from 'redux'
import { epicMiddleware, epics } from '../epics';
import { reducer } from '../reducers';

const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export default store;
