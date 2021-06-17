const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
    winner: null,
    stepNumber: 0,
    xIsNext: true,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'PLAY':
            return {
                ...state,
                history: payload,
                xIsNext: !state.xIsNext,
                stepNumber: state.history.length - 1,
            }
        case 'SET_WINNER':
            return {
                ...state,
                winner: payload,
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
        default:
            return state;
    }
};
