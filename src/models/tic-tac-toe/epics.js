import { ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

import * as actions from './actions';

export const ticTacToePlayEpic = (action$, state$) =>
    action$.pipe(
        ofType(actions.ON_PLAY.type),
        tap(() => { console.log({ action$, state$ }) }),
        ignoreElements()
    );