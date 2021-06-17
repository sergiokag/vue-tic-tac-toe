import { mapTo, tap } from 'rxjs/operators';

import { ofType } from 'redux-observable';

const gameEpic = action$ => action$.pipe(
    ofType('ON_PLAY'),
    tap((action) => {
        console.log('EPICS!!!!!')
        console.log(action)
    }),
    mapTo({ type: '__', })
);

export default gameEpic;