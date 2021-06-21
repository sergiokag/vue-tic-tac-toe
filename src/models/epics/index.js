import { createEpicMiddleware, combineEpics } from 'redux-observable';
import gameEpic from './game.epic';

export const epics = combineEpics(
    gameEpic
);

export const epicMiddleware = createEpicMiddleware();
