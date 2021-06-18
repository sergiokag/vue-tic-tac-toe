import { tap, ignoreElements } from 'rxjs/operators';

import { ofType } from 'redux-observable';

const gameEpic = action$ => action$.pipe(
    ofType('ON_PLAY'),
    tap((action) => {
        console.log('EPICS!!!!!')
        console.log(action)
    }),
    ignoreElements()
);

export default gameEpic;