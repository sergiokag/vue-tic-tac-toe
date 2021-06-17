import { createEpicMiddleware, combineEpics } from 'redux-observable';
import gameEpic from './gameEpic';

export const epics = combineEpics(
    gameEpic
);

export const epicMiddleware = createEpicMiddleware();
