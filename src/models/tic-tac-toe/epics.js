import { ofType } from 'redux-observable';
import { ignoreElements, tap, withLatestFrom } from 'rxjs/operators';

import * as actions from './actions';

export const ticTacToePlayEpic = (action$, state$) =>
    action$.pipe(
        ofType(actions.ON_PLAY.type),
        withLatestFrom(state$),
        tap((value) => { console.log({ value }) }),
        ignoreElements()
    );