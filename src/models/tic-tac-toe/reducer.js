import GameProcessor from '../../utils/GameProcessor';
import * as actions from './actions';

const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
    winner: null,
    stepNumber: 0,
    xIsNext: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.play.type: {
            return {
                ...state,
                history: payload.history,
                xIsNext: payload.xIsNext,
                stepNumber: payload.history.length - 1,
                winner: payload.winner,
            };
        }
        case actions.selectMove.type: {
            const _history = state.history.slice(0, payload + 1);
            const _current = _history[_history.length - 1];
            const _squares = _current.squares.slice();
            const winner = GameProcessor.calculateWinner(_squares);

            return {
                ...state,
                stepNumber: payload,
                xIsNext: payload % 2 === 0,
                winner,
            }
        }
        case actions.restart.type:
            return {
                ...initialState,
            }
        default:
            return state;
    }
};

export default reducer;
