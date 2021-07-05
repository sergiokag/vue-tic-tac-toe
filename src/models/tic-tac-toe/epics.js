// core
import { ofType } from 'redux-observable';
import { map, withLatestFrom } from 'rxjs/operators';

import * as actions from './actions';
import GameProcessor from '../../utils/GameProcessor';

export const ticTacToePlayEpic = (action$, state$) =>
    action$.pipe(
        ofType(actions.onPlay.type),
        withLatestFrom(state$),
        map(([action, state]) => {
            const { value, index } = action.payload;
            const { history, stepNumber, xIsNext, winner } = state.ticTacToe;

            if (value || winner) {
                return { type: 'default' };
            }

            const _history = history.slice(0, stepNumber + 1);
            const _current = _history[_history.length - 1];
            const _squares = _current.squares.slice();

            _squares[index] = xIsNext ? "X" : "O";

            const _newHistory = [
                ..._history,
                {
                    squares: _squares,
                },
            ];

            const _winner = GameProcessor.calculateWinner(_squares);

            return actions.play({
                history: _newHistory,
                xIsNext: !xIsNext,
                stepNumber: _newHistory.length - 1,
                winner: _winner,
            });
        }),
    );