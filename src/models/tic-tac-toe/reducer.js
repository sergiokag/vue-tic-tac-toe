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
            return {
                ...state,
                // history: state.history.slice(0, payload.stepNumber + 1), TODO: New History impl
                stepNumber: payload.stepNumber,
                xIsNext: payload.stepNumber % 2 === 0,
                winner: payload.winner,
            };
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
