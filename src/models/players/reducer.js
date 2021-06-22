import * as actions from './actions';

const initialState = {
    player1: null,
    player2: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.SET_PLAYER1.type:
            return {
                ...state,
                player1: payload !== state.player1 ? payload : state.player1,
            };
        case actions.SET_PLAYER2.type:
            return {
                ...state,
                player2: payload !== state.player2 ? payload : state.player2,
            };

        case actions.RESET_PLAYERS.type:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default reducer;
