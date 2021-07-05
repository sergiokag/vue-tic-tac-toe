import * as actions from './actions';

const initialState = {
    player1: null,
    player2: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.setPlayer1.type:
            return {
                ...state,
                player1: payload !== state.player1 ? payload : state.player1,
            };
        case actions.setPlayer2.type:
            return {
                ...state,
                player2: payload !== state.player2 ? payload : state.player2,
            };

        case actions.resetPlayers.type:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default reducer;
