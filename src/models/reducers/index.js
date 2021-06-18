import GameProcessor from '../../utils/GameProcessor';

const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
    winner: null,
    stepNumber: 0,
    xIsNext: true,
    player1: null,
    player2: null,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'PLAY': {
            const { value, index } = payload;

            if (value || state.winner) {
                return state;
            }

            const _history = state.history.slice(0, state.stepNumber + 1);
            const _current = _history[_history.length - 1];
            const _squares = _current.squares.slice();

            _squares[index] = state.xIsNext ? "X" : "O";

            const _newHistory = [
                ..._history,
                {
                    squares: _squares,
                },
            ];
            // Checking for winner
            const winner = GameProcessor.calculateWinner(_squares);

            return {
                ...state,
                history: _newHistory,
                xIsNext: !state.xIsNext,
                stepNumber: _newHistory.length - 1,
                winner
            };
        }
        case 'SELECT_MOVE':
            return {
                ...state,
                stepNumber: payload,
                xIsNext: payload % 2 === 0,
            }
        case 'RESTART':
            return {
                ...initialState,
            }
        case 'player1':
            return {
                ...state,
                player1: payload
            }
        case 'player2':
            return {
                ...state,
                player2: payload
            }
        case 'SET_PLAYER_NAMES': {
            const { player1, player2 } = payload;
            return {
                ...state,
                player1: player1 !== state.player1 ? player1 : state.player1,
                player2: player2 !== state.player2 ? player2 : state.player2,
            };
        }
        default:
            return state;
    }
};
