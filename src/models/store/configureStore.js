import { applyMiddleware, createStore } from 'redux'
import { epicMiddleware, epics } from '../epics';
import { reducers } from '../reducers';

const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export default store;
